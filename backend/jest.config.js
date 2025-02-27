module.exports = {
    preset: 'ts-jest',                      // Usa o preset do ts-jest para trabalhar com TypeScript
    testEnvironment: 'node',                // Define o ambiente de testes como Node.js
    coverageDirectory: './coverage',       // Diretório onde os relatórios de cobertura de testes serão gerados
    collectCoverage: true,                  // Habilita coleta de cobertura de testes
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',          // Utiliza o tsconfig.json configurado acima
      },
    },
    transform: {
      '^.+\\.ts$': 'ts-jest',               // Usar ts-jest para arquivos .ts
    },
    moduleFileExtensions: ['ts', 'js'],     // Extensões de arquivos que o Jest vai considerar
    testMatch: ['**/tests/**/*.test.ts'],   // Diretório onde os testes devem ser encontrados
  };
  