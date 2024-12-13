module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }], // TypeScript transform
    "^.+\\.jsx?$": "babel-jest", // Babel transform untuk file JS/JSX
  },
  moduleNameMapper: {
  "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/test/__mocks__/fileMock.js",  // <--- perhatikan perubahan di sini
},
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
