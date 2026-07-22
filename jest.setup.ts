import '@testing-library/jest-dom';

// Mock getComputedStyle for framer-motion/tests
Object.defineProperty(window, 'getComputedStyle', { value: () => ({ getPropertyValue: () => '' }) });
