"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("filter", () => {
    it("end to end or condition", () => {
        const f = (0, src_1.filter)((0, src_1.parse)(`userName eq "test1@example.com" or userName eq "test2@example.com"`));
        const users = [
            { userName: "test1@example.com" },
            { userName: "test2@example.com" }
        ];
        const ret = users.filter(f);
        chai_1.assert.deepEqual(ret, users);
    });
    it("end to end and condition", () => {
        const f = (0, src_1.filter)((0, src_1.parse)(`userName eq "test1@example.com" and id eq "id_1"`));
        const users = [
            { userName: "test1@example.com", id: "id_1" },
            { userName: "test2@example.com", id: "id_2" }
        ];
        const ret = users.filter(f);
        chai_1.assert.deepEqual(ret, [users[0]]);
    });
    it("end to end shielding backslash in quotes", () => {
        const f = (0, src_1.filter)((0, src_1.parse)(`userName eq "domain\\user.name"`));
        const users = [
            { userName: "domain\\user.name" }
        ];
        const ret = users.filter(f);
        chai_1.assert.deepEqual(ret, users);
    });
});
//# sourceMappingURL=filter.test.js.map