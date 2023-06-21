import extractTestsToRun from "./utils/extractTestsToRun";

export type ItOptions = {
  modulator: "skip" | "only" | "none";
};

const DEFAULT_OPTIONS: ItOptions = {
  modulator: "none",
};

const displayResult = (isValid: boolean): void => {
  if (isValid) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

type TestScenario = {
  scenario: () => void;
  name: string;
  options?: ItOptions;
};

type It = (testName: string, testScenario: () => void, options?: ItOptions) => void;
export type MyJestProps = {
  it: It;
  expectToBe: (result: any, expectedResult: any) => boolean;
  describe: (describeName: string, describeScenario: MyDescribe) => void;
};

export type MyDescribeProps = Omit<MyJestProps, "describe">;
type MyDescribe = (props: MyDescribeProps) => void;

const myJest: MyJestProps = {
  expectToBe: (result: any, expectedResult: any): boolean => {
    const isEqual = result === expectedResult;
    displayResult(isEqual);
    return isEqual;
  },

  it: (testName: string, testScenario: () => void, options?: ItOptions) => {
    const defaultedOptions = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    if (defaultedOptions.modulator === "skip") {
      console.log(`Skipping test: ${testName}`);
      return;
    }
    console.log(testName);
    testScenario();
  },

  describe: (describeName: string, describeScenario: MyDescribe) => {
    console.log(describeName);
    const testArray: TestScenario[] = [];
    const localIt: It = (testName, scenario, options) => {
      testArray.push({
        name: testName,
        scenario,
        options,
      });
    };
    describeScenario({
      expectToBe: () => null,
      it: localIt,
    });

    const testsToRun = extractTestsToRun(testArray);
    testsToRun.forEach(({ name, scenario }) => {
      console.log("Name", name);
      scenario();
    });
  },
};

export default myJest;
