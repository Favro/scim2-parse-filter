"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const parser_1 = require("../src/parser");
const test_util_1 = require("./test_util");
const chai = require("chai");
const assert = chai.assert;
describe("tokenizer", () => {
    const tok = (literal, type) => ({ literal, type });
    it("eot", () => {
        assert.deepEqual((0, parser_1.tokenizer)(""), [test_util_1.EOT]);
    });
    it("false", () => {
        assert.deepEqual((0, parser_1.tokenizer)("false"), [
            { literal: "false", type: "Word" },
            test_util_1.EOT
        ]);
    });
    it("userName is AttrPath", () => {
        assert.deepEqual((0, parser_1.tokenizer)("userName"), [
            { literal: "userName", type: "Word" },
            test_util_1.EOT
        ]);
    });
    it("userName eq -12", () => {
        assert.deepEqual([tok("userName", "Word"), tok("eq", "Word"), tok("-12", "Number"), test_util_1.EOT], (0, parser_1.tokenizer)("userName eq -12"));
    });
    it("sub-attribute after ValPath", () => {
        assert.deepEqual((0, parser_1.tokenizer)('emails[type eq "work"].value eq "user@example.com"'), [
            tok("emails", "Word"),
            tok("[", "Bracket"),
            tok("type", "Word"),
            tok("eq", "Word"),
            tok("\"work\"", "Quoted"),
            tok("].", "Bracket"),
            tok("value", "Word"),
            tok("eq", "Word"),
            tok("\"user@example.com\"", "Quoted"),
            test_util_1.EOT,
        ]);
    });
});
//# sourceMappingURL=tokenizer.test.js.map