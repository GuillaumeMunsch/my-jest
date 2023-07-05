export const deepCheck = (result: any, expectedResult: any): boolean => {
  const resultEntries = Object.entries(result);
  const expectedResultEntries = Object.entries(expectedResult);

  return (
    resultEntries.length === expectedResultEntries.length &&
    resultEntries.every(([resultEntryKey, resultEntryValue]) => {
      if (typeof resultEntryValue === "object") {
        return deepCheck(resultEntryValue, expectedResult[resultEntryKey]);
      }
      return expectedResult[resultEntryKey] === resultEntryValue;
    })
  );
};
