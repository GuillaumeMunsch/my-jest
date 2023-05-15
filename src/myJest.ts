const displayResult = (isValid: boolean): void => {
  if (isValid) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

const myJest = {
  expectToBe: (result: any, expectedResult: any): boolean => {
    const isEqual = result === expectedResult;
    displayResult(isEqual);
    return isEqual;
  },

  it: (testName: string, testCallback: () => void) => {
    console.log(testName);
    testCallback();
  },
};

export default myJest;
