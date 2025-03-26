module.exports = {
    preset: 'ts-jest',                      
    testEnvironment: 'node',                
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    setupFiles: ["dotenv/config"],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',         
      },
    },
    transform: {
      '^.+\\.ts$': 'ts-jest',               
    },
    moduleFileExtensions: ['ts', 'js'],     
    testMatch: ['**/tests/**/*.test.ts'],  
  };
  