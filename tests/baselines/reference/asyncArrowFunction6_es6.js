//// [asyncArrowFunction6_es6.ts]

var foo = async (a = await): Promise<void> => {
}

//// [asyncArrowFunction6_es6.js]
var foo = (a = yield ) => __awaiter(function* () {
},
this, void 0, Promise);
