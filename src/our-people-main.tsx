import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import OurPeoplePage from './OurPeoplePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Monkey-patch DOM Node methods to prevent Google Translate (and WordPress / browser extensions)
// from crashing the React application when they mutate or replace text nodes behind React's back.
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

const mountElement = document.getElementById('root');

if (mountElement) {
  createRoot(mountElement).render(
    <StrictMode>
      <div className="font-sans">
        <Navbar forceSolid={true} />
        <main>
          <OurPeoplePage />
        </main>
        <Footer />
      </div>
    </StrictMode>,
  );
} else {
  console.warn('[OurPeoplePage] Element with id="root" not found in the DOM.');
}
