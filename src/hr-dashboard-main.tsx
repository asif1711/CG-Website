import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HrDashboardPage from './components/HRDashboard/HrDashboardPage';
import './index.css';

// Monkey-patch DOM Node methods to prevent WordPress plugins / browser extensions
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

// Function to find and mount the HR Dashboard React app safely
function initHrDashboard() {
  // Support common WordPress container IDs
  const targetSelectors = [
    '#cg-employee-dashboard',
    '#hr-dashboard-app',
    '#hr-dashboard-root',
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
    console.warn('[CG HR Dashboard] Target mount element not found (#cg-employee-dashboard, #hr-dashboard-app, #root).');
    return;
  }

  // Duplicate initialization protection (as specified in Section 15 of project guidelines)
  if (mountElement.dataset.cgInitialized === 'true') {
    console.warn('[CG HR Dashboard] Duplicate initialization prevented.');
    return;
  }

  mountElement.dataset.cgInitialized = 'true';

  const roleAttr = mountElement.dataset.role || mountElement.dataset.userRole;
  const initialRole = (roleAttr === 'admin' || roleAttr === 'administrator' || mountElement.dataset.isAdmin === 'true')
    ? 'admin'
    : (roleAttr === 'hr' ? 'hr' : undefined);

  const root = createRoot(mountElement);
  root.render(
    <StrictMode>
      <HrDashboardPage initialRole={initialRole} />
    </StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHrDashboard);
} else {
  initHrDashboard();
}
