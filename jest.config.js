const config = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '^js/(.*)$': '<rootDir>/src/js/$1',
        '^components/(.*)$': '<rootDir>/src/components/$1',
        // add more aliases as needed
    },
    moduleDirectories: ['node_modules', 'src'], // allow absolute imports from src/
}

module.exports = config;