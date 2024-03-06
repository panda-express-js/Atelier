module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setUpTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js'
  }
};