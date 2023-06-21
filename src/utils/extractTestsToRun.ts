import { ItOptions } from "../myJest";

const extractTestsToRun = <T extends { options?: ItOptions }>(tests: T[]) => {
  const hasTestsWithOnlyOption = tests.some(({ options }) => options?.modulator === "only");

  return tests.filter(({ options }) =>
    hasTestsWithOnlyOption ? options?.modulator === "only" : !options || options.modulator !== "skip"
  );
};
export default extractTestsToRun;
