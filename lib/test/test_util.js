"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pr = exports.v = exports.op = exports.or = exports.and = exports.eq = exports.EOT = void 0;
exports.EOT = { literal: "", type: "EOT" };
function eq(attrPath, compValue) {
    return { op: "eq", attrPath, compValue };
}
exports.eq = eq;
function and(...filters) {
    return { op: "and", filters };
}
exports.and = and;
function or(...filters) {
    return { op: "or", filters };
}
exports.or = or;
function op(op, attrPath, compValue) {
    return { op, attrPath, compValue };
}
exports.op = op;
function v(attrPath, valFilter) {
    return { op: "[]", attrPath, valFilter };
}
exports.v = v;
function pr(attrPath) {
    return { op: "pr", attrPath };
}
exports.pr = pr;
//# sourceMappingURL=test_util.js.map