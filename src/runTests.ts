import myJest from "./myJest";

export const runTests = () => {
  myJest.describe("Test suite", ({ it, expectToBe, expectToEqual }) => {
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

    it("Should assert 1 != 3", () => {
      // WHEN
      const result = 1;

      // THEN
      const expectedResult = 3;
      expectToBe(result, expectedResult);
    });

    it("Should assert 3 = 3", () => {
      // WHEN
      const result = 3;

      // THEN
      const expectedResult = 3;
      expectToBe(result, expectedResult);
    });

    it("Should assert that 2 deeply similar nested objects are the same", () => {
      // GIVEN
      const givenObject = {
        name: {
          firstName: "Guillaume",
          increment: (i: number) => i + 1,
          obj: {
            nestedObjAgain: {
              toto: {
                hello: "Hello !",
              },
            },
          },
        },
      };

      // WHEN
      const expectedObject = {
        name: {
          firstName: "Guillaume",
          increment: (i: number) => i + 1,
          obj: {
            nestedObjAgain: {
              toto: {
                hello: "Hello !",
              },
            },
          },
        },
      };

      // THEN
      expectToEqual(givenObject, expectedObject);
    });
  });
};
