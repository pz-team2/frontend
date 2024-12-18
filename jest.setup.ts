import "@testing-library/jest-dom";

Object.defineProperty(global, "import", {
  value: {
    meta: {
      env: {
        VITE_API_URL_PICTURE: "http://example.com/picture", // Sesuaikan dengan value yang Anda gunakan
      },
    },
  },
});