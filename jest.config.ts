export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: ["tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1",
  },
};
