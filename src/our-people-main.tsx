import { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'motion/react';
import OurPeoplePage from './OurPeoplePage';
import TeamDetailPage from './TeamDetailPage';
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

const TEAM_SLUGS = [
  '/our-people/learning-team',
  '/our-people/consultant-team',
  '/our-people/human-strategy-team',
  '/our-people/assistant-team',
  '/our-people/operational-team',
  '/our-people/marketing-team'
];

function OurPeopleApp() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Robust path normalization (strips trailing slashes and query strings for comparison)
  const normalizedCurrentPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

  const isTeamDetailPage = TEAM_SLUGS.some((slug) => {
    const normalizedSlug = slug.replace(/\/+$/, '');
    return normalizedCurrentPath === normalizedSlug;
  });

  return (
    <div className="font-sans">
      <Navbar forceSolid={true} />
      <main>
        <AnimatePresence mode="wait">
          {isTeamDetailPage ? (
            <motion.div
              key={`team-detail-${normalizedCurrentPath}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <TeamDetailPage
                slug={currentPath}
                onNavigateBack={() => {
                  window.history.pushState({}, '', '/our-people/');
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="our-people"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <OurPeoplePage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

const mountElement = document.getElementById('root');

if (mountElement) {
  createRoot(mountElement).render(
    <StrictMode>
      <OurPeopleApp />
    </StrictMode>,
  );
} else {
  console.warn('[OurPeoplePage] Element with id="root" not found in the DOM.');
}
