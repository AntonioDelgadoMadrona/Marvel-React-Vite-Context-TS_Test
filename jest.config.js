export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testMatch: ['<rootDir>/src/tests/**/*.test.{ts,tsx}'],
}
