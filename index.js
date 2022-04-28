const { exercise1, exercise2 } = require('./solver');

(async () => {
    const output = [
        await exercise1(),
        await exercise2()
    ];

    console.dir(output, { depth: null });
})();
