module.exports = {
  testEnvironment: 'jest-environment-jsdom',  // browser-like environment
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',   // handle JSX with Babel
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // mock CSS imports
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // run after env setup
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
