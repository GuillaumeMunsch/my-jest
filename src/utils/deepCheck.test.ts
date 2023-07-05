import { deepCheck } from "./deepCheck";

describe("deepCheck", () => {
  it("Should assert that empty objects are the same", () => {
    // GIVEN
    const givenObject = {};
    const expectedObject = {};

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(true);
  });

  it("Should assert that 1 empty object and 1 with a prop are the different", () => {
    // GIVEN
    const givenObject = {};
    const expectedObject = { name: "Guillaume" };

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(false);
  });

  it("Should assert that 2 object with the same keys but different values are the different", () => {
    // GIVEN
    const givenObject = { name: "Mathieu" };
    const expectedObject = { name: "Guillaume" };

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(false);
  });

  it("Should assert that 2 object with the same keys and values are the the same", () => {
    // GIVEN
    const givenObject = { name: "Guillaume", value: 1 };
    const expectedObject = { name: "Guillaume", value: 1 };

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(true);
  });

  it("Should assert that 2 object with 1 props which is the same object are the the same", () => {
    // GIVEN
    const givenObject = { name: { firstName: "Guillaume" } };
    const expectedObject = { name: { firstName: "Guillaume" } };

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(true);
  });

  it("Should assert that 2 object with several similar nested object props are the the same", () => {
    // GIVEN
    const givenObject = { name: { firstName: "Guillaume", obj: { nestedObjAgain: { toto: { hello: "Hello !" } } } } };
    const expectedObject = {
      name: { firstName: "Guillaume", obj: { nestedObjAgain: { toto: { hello: "Hello !" } } } },
    };

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(true);
  });

  it("Should assert that 2 object with a similar function as prop, are the same", () => {
    // GIVEN
    const givenObject = { increment: (i: number) => i + 1 };
    const expectedObject = { increment: (i: number) => i + 1 };

    // WHEN
    const result = deepCheck(givenObject, expectedObject);

    // THEN
    expect(result).toBe(true);
  });
});
