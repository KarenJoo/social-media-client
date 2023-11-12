module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ["<rootDir>/src/js/setupTests.js"],
  };
  