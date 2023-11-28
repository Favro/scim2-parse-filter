"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("readme", () => {
    it("filter", () => {
        const f = (0, src_1.filter)((0, src_1.parse)(`userName eq "test1@example.com"`));
        const users = [
            { userName: "test1@example.com" },
            { userName: "test2@example.com" }
        ];
        const ret = users.filter(f);
        chai_1.assert.deepEqual(ret, [users[0]]);
    });
    it("parse", () => {
        const f = (0, src_1.parse)(`userType eq "Employee" and emails[type eq "work" and value co "@example.com"]`);
        chai_1.assert.deepEqual(f, {
            op: "and",
            filters: [
                {
                    op: "eq",
                    attrPath: "userType",
                    compValue: "Employee"
                },
                {
                    op: "[]",
                    attrPath: "emails",
                    valFilter: {
                        op: "and",
                        filters: [
                            {
                                op: "eq",
                                attrPath: "type",
                                compValue: "work"
                            },
                            {
                                op: "co",
                                attrPath: "value",
                                compValue: "@example.com"
                            }
                        ]
                    }
                }
            ]
        });
    });
    it('stringify', () => {
        const ast = {
            op: "and",
            filters: [
                {
                    op: "eq",
                    attrPath: "userType",
                    compValue: "Employee"
                },
                {
                    op: "[]",
                    attrPath: "emails",
                    valFilter: {
                        op: "and",
                        filters: [
                            {
                                op: "eq",
                                attrPath: "type",
                                compValue: "work"
                            },
                            {
                                op: "co",
                                attrPath: "value",
                                compValue: "@example.com"
                            }
                        ]
                    }
                }
            ]
        };
        chai_1.assert.deepEqual((0, src_1.stringify)(ast), 'userType eq "Employee" and emails[type eq "work" and value co "@example.com"]');
    });
});
//# sourceMappingURL=readme.test.js.map