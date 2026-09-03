import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BookPDSessionPage from './components/BookPDSession/BookPDSessionPage';
import './index.css';

// Monkey-patch DOM Node methods to prevent WordPress plugins / browser extensions / Google Translate
// from crashing the React tree when they mutate text nodes.
if (typeof Node !== 'undefined' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      return newNode;
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };

  const originalReplaceChild = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function <T extends Node>(newChild: Node, oldChild: T): T {
    if (oldChild.parentNode !== this) {
      return oldChild;
    }
    return originalReplaceChild.call(this, newChild, oldChild) as T;
  };
}

// Function to find and mount the Book PD Session React app safely
function initBookPdSession() {
  // Support the WordPress container ID and standard fallbacks
  const targetSelectors = [
    '#cg-book-pd-session',
    '#book-pd-session-root',
    '#root'
  ];

  let mountElement: HTMLElement | null = null;
  for (const selector of targetSelectors) {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (el) {
      mountElement = el;
      break;
    }
  }

  if (!mountElement) {
    console.warn('[CG Book PD Session] Target mount element not found (#cg-book-pd-session, #root).');
    return;
  }

  // Duplicate initialization protection
  if (mountElement.dataset.cgInitialized === 'true') {
    console.warn('[CG Book PD Session] Duplicate initialization prevented.');
    return;
  }

  mountElement.dataset.cgInitialized = 'true';

  const root = createRoot(mountElement);
  root.render(
    <StrictMode>
      <BookPDSessionPage />
    </StrictMode>
  );
}

// Expose init function globally on window for manual re-init if needed
if (typeof window !== 'undefined') {
  (window as any).initCgBookPdSession = initBookPdSession;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBookPdSession);
} else {
  initBookPdSession();
}

export default initBookPdSession;
