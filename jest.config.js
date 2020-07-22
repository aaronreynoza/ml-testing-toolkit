module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '**/src/**/**/*.js'
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      functions: 98,
      branches: 97,
      lines: 98
    }
  },
  modulePathIgnorePatterns: ['spec_files']
}
