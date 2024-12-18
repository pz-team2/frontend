module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: 'coverage', // Folder output laporan cakupan
  coverageReporters: ['html', 'text-summary'],
  moduleNameMapper: {
    '^.+\\.(css|scss|png|jpg|svg)$': 'identity-obj-proxy', // Mock file CSS/images
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }], // TypeScript transform
    "^.+\\.jsx?$": "babel-jest", // Babel transform untuk file JS/JSX
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Jika TypeScript digunakan
  globals: {
    "ts-jest": {
      useESM: true
    }
  }
};
