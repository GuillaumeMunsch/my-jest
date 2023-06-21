import { ItOptions } from "../myJest";
import extractTestsToRun from "./extractTestsToRun";

type Test<T> = T & { options?: ItOptions };

describe("Extract tests to run", () => {
  it("Should return all tests", () => {
    // GIVEN
    const tests: Test<unknown>[] = [
      {
        options: {
          modulator: "none",
        },
      },
    ];

    // WHEN
    const filteredTests = extractTestsToRun(tests);

    // THEN
    expect(filteredTests).toEqual(tests);
  });

  it("Should return all tests even without options", () => {
    // GIVEN
    const tests: Test<unknown>[] = [{}];

    // WHEN
    const filteredTests = extractTestsToRun(tests);

    // THEN
    expect(filteredTests).toEqual(tests);
  });

  it("Should skip the 'modulator = skip' tests", () => {
    // GIVEN
    const tests: Test<unknown>[] = [
      {
        options: {
          modulator: "none",
        },
      },
      {
        options: {
          modulator: "skip",
        },
      },
      {
        options: {
          modulator: "none",
        },
      },
    ];

    // WHEN
    const filteredTests = extractTestsToRun(tests);

    // THEN
    const expectedFilteredTests: Test<unknown>[] = [
      {
        options: {
          modulator: "none",
        },
      },
      {
        options: {
          modulator: "none",
        },
      },
    ];
    expect(filteredTests).toEqual(expectedFilteredTests);
  });

  it("Should only keep the 'modulator = only' test", () => {
    // GIVEN
    const tests: Test<unknown>[] = [
      {
        options: {
          modulator: "none",
        },
      },
      {
        options: {
          modulator: "skip",
        },
      },
      {
        options: {
          modulator: "none",
        },
      },
      {
        options: {
          modulator: "only",
        },
      },
    ];

    // WHEN
    const filteredTests = extractTestsToRun(tests);

    // THEN
    const expectedFilteredTests: Test<unknown>[] = [
      {
        options: {
          modulator: "only",
        },
      },
    ];
    expect(filteredTests).toEqual(expectedFilteredTests);
  });
});
