module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['./src/js/setupTests.js'],
    moduleNameMapper: {
        "localStorage": "./src/js/mocks/localStorage.mock.js",
      },
  };
  