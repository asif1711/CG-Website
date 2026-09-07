import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RPLConsultationPage from './components/RPLConsultation/RPLConsultationPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Monkey-patch DOM Node methods to prevent WordPress plugins / browser extensions / Google Translate
// from crashing the React tree when they mutate or replace text nodes.
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

function RplConsultationApp() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between">
      <Navbar forceSolid={true} logoHref="https://chelsongordon.com/" isHomepage={false} />
      <main className="flex-1">
        <RPLConsultationPage />
      </main>
      <Footer />
    </div>
  );
}

// Function to find and mount the RPL Consultation React app safely into #rpl-consultation
function initRplConsultation() {
  const targetSelectors = [
    '#rpl-consultation',
    '#rpl-consultation-root',
    '#root',
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
    console.warn('[RPL Consultation] Target mount element not found (#rpl-consultation).');
    return;
  }

  // Prevent duplicate initialization if the script is loaded more than once
  if (mountElement.dataset.rplInitialized === 'true') {
    return;
  }
  mountElement.dataset.rplInitialized = 'true';

  const root = createRoot(mountElement);
  root.render(
    <StrictMode>
      <RplConsultationApp />
    </StrictMode>
  );
}

// Expose init function globally on window for manual re-init or Elementor hooks if needed
if (typeof window !== 'undefined') {
  (window as any).initRplConsultation = initRplConsultation;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRplConsultation);
} else {
  initRplConsultation();
}

export default initRplConsultation;
