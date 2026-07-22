import '@testing-library/jest-dom/extend-expect';

// Mock getComputedStyle for framer-motion/tests
Object.defineProperty(window, 'getComputedStyle', { value: () => ({ getPropertyValue: () => '' }) });
