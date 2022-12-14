describe("Testing simple calculator functions", function () {

  it("Expected addition success", function () {
    let a = 10;
    let b = 10;
    let result = a + b;

    expect(add(a, b)).toBe(result);
  });

  it("Expected subtraction success", function () {
    let a = 10;
    let b = 10;
    let result = a - b;

    expect(sub(a, b)).toBe(result);
  });

  it("Expected multiplication success", function () {
    let a = 10;
    let b = 10;
    let result = a * b;

    expect(multi(a, b)).toBe(result);
  });

  it("Expected division success", function () {
    let a = 10;
    let b = 0;
    let result = a / b;

    expect(div(a, b)).toBe(result);
  });

});


describe("Mathematical expections", function () {
  // test divison by zero crashes everything!
});