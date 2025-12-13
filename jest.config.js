// jest.config.js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/ecommerce/src/__tests__/setupTests.js'],
  roots: ['<rootDir>/ecommerce/src'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};