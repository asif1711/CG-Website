import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CoursesSection from './components/Courses/CoursesSection';
import DiplomaAICoursePage from './components/Courses/DiplomaAICoursePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

/**
 * Full Page wrapper for standalone WordPress course page templates.
 * If WordPress already renders the header and footer, the course page can be mounted directly into #cg-diploma-ai-course.
 */
function StandaloneDiplomaAICourseApp() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between">
      <Navbar forceSolid={true} logoHref="https://chelsongordon.com/" isHomepage={false} />
      <main className="flex-1">
        <DiplomaAICoursePage />
      </main>
      <Footer />
    </div>
  );
}

/**
 * Mounts the Homepage Courses Section into #cg-courses-section safely
 */
export function initCgCoursesSection() {
  const targetSelectors = [
    '#cg-courses-section',
    '#courses-section-root',
    '.cg-courses-section-mount'
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
    return false;
  }

  if (mountElement.dataset.cgCoursesInitialized === 'true') {
    return true;
  }

  mountElement.dataset.cgCoursesInitialized = 'true';

  const root = createRoot(mountElement);
  root.render(
    <StrictMode>
      <CoursesSection />
    </StrictMode>
  );

  return true;
}

/**
 * Mounts the Dedicated Diploma Course Page into #cg-diploma-ai-course safely
 */
export function initCgDiplomaAICourse() {
  const targetSelectors = [
    '#cg-diploma-ai-course',
    '#diploma-ai-course-root',
    '#cg-course-detail-root'
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
    return false;
  }

  if (mountElement.dataset.cgCourseInitialized === 'true') {
    return true;
  }

  mountElement.dataset.cgCourseInitialized = 'true';

  // If the mount element is a raw container without WordPress header/footer, render with Navbar & Footer
  const hasExternalWpNav = !!document.querySelector('header, .site-header, #masthead, nav.elementor-nav-menu');
  const ComponentToRender = hasExternalWpNav ? DiplomaAICoursePage : StandaloneDiplomaAICourseApp;

  const root = createRoot(mountElement);
  root.render(
    <StrictMode>
      <ComponentToRender />
    </StrictMode>
  );

  return true;
}

/**
 * Master initializer for WordPress pages. Detects whichever mount element is present and mounts it.
 */
export function initCgCourses() {
  initCgCoursesSection();
  initCgDiplomaAICourse();
}

// Expose on window for manual WordPress / Elementor execution
if (typeof window !== 'undefined') {
  (window as any).initCgCourses = initCgCourses;
  (window as any).initCgCoursesSection = initCgCoursesSection;
  (window as any).initCgDiplomaAICourse = initCgDiplomaAICourse;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCgCourses);
} else {
  initCgCourses();
}

export default initCgCourses;
