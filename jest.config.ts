module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: 'coverage', // Folder output laporan cakupan
  coverageReporters: ['html', 'text-summary'],
  moduleNameMapper: {
    '^.+\\.(css|scss|png|jpg|svg)$': 'identity-obj-proxy', // Mock file CSS/images
  },
  // collectCoverageFrom: [
  //   'src/**/*.{ts,tsx}',   // Semua file TS/TSX dalam folder src
  //   '!src/**/*.test.{ts,tsx}', // Kecualikan file test
  //   '!src/index.tsx',      // Kecualikan entry point utama
  //   '!src/reportWebVitals.ts',
  // ],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Jika TypeScript digunakan
  globals: {
    "ts-jest": {
      useESM: true
    }
  }
};
