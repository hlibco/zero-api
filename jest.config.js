module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{js,ts}', '!**/*.spec.{js,ts}', '!dist/**'],
  coverageDirectory: '../coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 25,
      lines: 25,
      statements: 25
    }
  },
  forceExit: true,
  globalSetup: './jest.setup.js',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: true,
      experimental: true,
      compilerHost: true
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  notify: true,
  preset: 'ts-jest',
  rootDir: '.',
  setupFilesAfterEnv: ['jest'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
  testRegex: '.spec.ts$',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}
