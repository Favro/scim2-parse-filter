"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_util_1 = require("./test_util");
const src_1 = require("../src");
const chai_1 = require("chai");
function to_s(f) {
    switch (f.op) {
        case "or":
        case "and":
            return `${f.op}(${f.filters.map(to_s).join(" ")})`;
        case "eq":
            return `${f.attrPath}=${f.compValue}`;
        default:
            return JSON.stringify(f);
    }
}
const test = (text, e) => {
    it(text, () => {
        chai_1.assert.equal(to_s((0, src_1.flatten)((0, src_1.parse)(text))), to_s(e));
    });
};
const make = num => [
    (0, test_util_1.eq)(`n${num}`, num),
    `n${num} eq ${num}`
];
const [a1, e1] = make(1);
const [a2, e2] = make(2);
const [a3, e3] = make(3);
const [a4, e4] = make(4);
describe("flatten", () => {
    describe("simple", () => {
        test(`(${e1} and ${e2}) and ${e3}`, (0, test_util_1.and)(a1, a2, a3));
        test(`(${e1} and (${e2} and ${e4})) and ${e3}`, (0, test_util_1.and)(a1, a2, a4, a3));
        test(`(${e1} and ((${e2} and ${e4}))) and ${e3}`, (0, test_util_1.and)(a1, a2, a4, a3));
        test(`xx[${e1} and ((${e2} and ${e4}))]`, (0, test_util_1.and)((0, test_util_1.eq)("xx.n1", 1), (0, test_util_1.eq)("xx.n2", 2), (0, test_util_1.eq)("xx.n4", 4)));
    });
    describe("andor", () => {
        test(`(${e1} or ${e2}) and ${e3}`, (0, test_util_1.and)((0, test_util_1.or)(a1, a2), a3));
        test(`${e1} or (${e2} and ${e3})`, (0, test_util_1.or)(a1, (0, test_util_1.and)(a2, a3)));
        test(`(${e1}) or (${e2} and ${e3})`, (0, test_util_1.or)(a1, (0, test_util_1.and)(a2, a3)));
    });
});
//# sourceMappingURL=flatten.test.js.map