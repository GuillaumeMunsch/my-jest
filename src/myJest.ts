const myJest = {
  expectToBe: (result: any, expectedResult: any) => {
    const isEqual = result === expectedResult;
    if (isEqual) {
      console.log("Test passed", result, expectedResult);
      return true;
    }
    console.log("Test failed", result, expectedResult);
    return false;
  },
};

export default myJest;
