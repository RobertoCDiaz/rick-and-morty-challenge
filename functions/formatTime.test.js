const formatTime = require("./formatTime");

test("Tests if formatTime function works correctly", () => {
    expect(formatTime(1000)).toBe("1s 0ms");
    expect(formatTime(1234)).toBe("1s 234ms");
    expect(formatTime(0)).toBe("0s 0ms");
    expect(formatTime(15050)).toBe("15s 50ms");
});