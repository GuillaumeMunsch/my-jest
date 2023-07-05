import myJest from "./myJest";

export const runTests = () => {
  myJest.describe("Test suite", ({ it, expectToBe }) => {
    it("Should assert 1 = 1", () => {
      // WHEN
      const result = 1;

      // THEN
      const expectedResult = 1;
      expectToBe(result, expectedResult);
    });

    it("Should assert 1 != 2", () => {
      // WHEN
      const result = 1;

      // THEN
      const expectedResult = 2;
      expectToBe(result, expectedResult);
    });

    it(
      "Should assert 1 != 3",
      () => {
        // WHEN
        const result = 1;

        // THEN
        const expectedResult = 3;
        expectToBe(result, expectedResult);
      },
      { modulator: "only" }
    );

    it(
      "Should assert 3 = 3",
      () => {
        // WHEN
        const result = 3;

        // THEN
        const expectedResult = 3;
        expectToBe(result, expectedResult);
      },
      { modulator: "only" }
    );
  });
};
