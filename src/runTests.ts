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
  test1();
  test2();
};
