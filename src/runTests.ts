import myJest from "./myJest";

const test1 = () => {
  // WHEN
  const result = 1;

  // THEN
  const expectedResult = 1;
  myJest.expectToBe(result, expectedResult);
};

const test2 = () => {
  // WHEN
  const result = 1;

  // THEN
  const expectedResult = 2;
  myJest.expectToBe(result, expectedResult);
};

export const runTests = () => {
  myJest.it("Should assert 1 = 1", () => {
    test1();
  });
  myJest.it("Should assert 1 != 2", () => {
    test2();
  });
};
