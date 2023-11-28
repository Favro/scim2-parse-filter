"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_util_1 = require("./test_util");
const src_1 = require("../src");
const chai_1 = require("chai");
// When modifying or adding to these tests,
// please make sure to do the inverse test in parse!
const test = (text, e) => {
    it(text, () => {
        chai_1.assert.deepEqual((0, src_1.stringify)(e), text);
    });
};
describe('stringify', () => {
    describe("logic", () => {
        function teq(e, a) {
            chai_1.assert.deepEqual((0, src_1.stringify)(a), (0, src_1.stringify)((0, src_1.parse)(e)), e);
        }
        const [a1, e1] = [(0, test_util_1.eq)("n1", 1), "n1 eq 1"];
        const [a2, e2] = [(0, test_util_1.eq)("n2", 2), "n2 eq 2"];
        const [a3, e3] = [(0, test_util_1.eq)("n3", 3), "n3 eq 3"];
        const [a4, e4] = [(0, test_util_1.eq)("n4", 4), "n4 eq 4"];
        it("symple", () => {
            teq(`${e1}`, a1);
        });
        it("and", () => {
            teq(`${e1} and ${e2}`, (0, test_util_1.and)(a1, a2));
        });
        it("and and", () => {
            teq(`${e1} and ${e2} and ${e3}`, (0, test_util_1.and)(a1, a2, a3));
        });
        it("and or", () => {
            teq(`${e1} and ${e2} or ${e3}`, (0, test_util_1.or)((0, test_util_1.and)(a1, a2), a3));
        });
        it("or and", () => {
            teq(`${e1} or ${e2} and ${e3}`, (0, test_util_1.or)(a1, (0, test_util_1.and)(a2, a3)));
        });
        it("or or", () => {
            teq(`${e1} or ${e2} or ${e3}`, (0, test_util_1.or)(a1, a2, a3));
        });
        it("and and and", () => {
            teq(`${e1} and ${e2} and ${e3} and ${e4}`, (0, test_util_1.and)(a1, a2, a3, a4));
        });
        it("and and or", () => {
            teq(`${e1} and ${e2} and ${e3} or ${e4}`, (0, test_util_1.or)((0, test_util_1.and)(a1, a2, a3), a4));
        });
        it("and or and", () => {
            teq(`${e1} and ${e2} or ${e3} and ${e4}`, (0, test_util_1.or)((0, test_util_1.and)(a1, a2), (0, test_util_1.and)(a3, a4)));
        });
        it("and or or", () => {
            teq(`${e1} and ${e2} or ${e3} or ${e4}`, (0, test_util_1.or)((0, test_util_1.and)(a1, a2), a3, a4));
        });
        it("or and and", () => {
            teq(`${e1} or ${e2} and ${e3} and ${e4}`, (0, test_util_1.or)(a1, (0, test_util_1.and)(a2, a3, a4)));
        });
        it("or and or", () => {
            teq(`${e1} or ${e2} and ${e3} or ${e4}`, (0, test_util_1.or)(a1, (0, test_util_1.and)(a2, a3), a4));
        });
        it("or and or and or and or", () => {
            teq(`${e1} or ${e2} and ${e3} or ${e4} and ${e1} or ${e2} and ${e3} or ${e4}`, (0, test_util_1.or)(a1, (0, test_util_1.and)(a2, a3), (0, test_util_1.and)(a4, a1), (0, test_util_1.and)(a2, a3), a4));
        });
        it("and or and or and or and", () => {
            teq(`${e2} and ${e3} or ${e4} and ${e1} or ${e2} and ${e3} or ${e4} and ${e1}`, (0, test_util_1.or)((0, test_util_1.and)(a2, a3), (0, test_util_1.and)(a4, a1), (0, test_util_1.and)(a2, a3), (0, test_util_1.and)(a4, a1)));
        });
    });
    describe("samples", () => {
        test('userName eq "bjensen"', (0, test_util_1.eq)("userName", "bjensen"));
        test(`name.familyName co "O'Malley"`, (0, test_util_1.op)("co", "name.familyName", "O'Malley"));
        test(`userName sw "J"`, (0, test_util_1.op)("sw", "userName", "J"));
        test(`urn:ietf:params:scim:schemas:core:2.0:User:userName sw "J"`, (0, test_util_1.op)("sw", "urn:ietf:params:scim:schemas:core:2.0:User:userName", "J"));
        test(`title pr`, (0, test_util_1.pr)("title"));
        test(`meta.lastModified gt "2011-05-13T04:42:34Z"`, (0, test_util_1.op)("gt", "meta.lastModified", "2011-05-13T04:42:34Z"));
        test(`meta.lastModified ge "2011-05-13T04:42:34Z"`, (0, test_util_1.op)("ge", "meta.lastModified", "2011-05-13T04:42:34Z"));
        test(`meta.lastModified lt "2011-05-13T04:42:34Z"`, (0, test_util_1.op)("lt", "meta.lastModified", "2011-05-13T04:42:34Z"));
        test(`meta.lastModified le "2011-05-13T04:42:34Z"`, (0, test_util_1.op)("le", "meta.lastModified", "2011-05-13T04:42:34Z"));
        test(`title pr and userType eq "Employee"`, (0, test_util_1.and)((0, test_util_1.pr)("title"), (0, test_util_1.eq)("userType", "Employee")));
        test(`title pr or userType eq "Intern"`, (0, test_util_1.or)((0, test_util_1.pr)("title"), (0, test_util_1.eq)("userType", "Intern")));
        test(`schemas eq "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"`, (0, test_util_1.eq)("schemas", "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"));
        test(`userType eq "Employee" and (emails co "example.com" or emails co "example.org")`, (0, test_util_1.and)((0, test_util_1.eq)("userType", "Employee"), (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))));
        test(`userType ne "Employee" and not (emails co "example.com" or emails co "example.org")`, (0, test_util_1.and)((0, test_util_1.op)("ne", "userType", "Employee"), {
            op: "not",
            filter: (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))
        }));
        test(`userType eq "Employee" and emails.type eq "work"`, (0, test_util_1.and)((0, test_util_1.eq)("userType", "Employee"), (0, test_util_1.eq)("emails.type", "work")));
        test(`userType eq "Employee" and emails[type eq "work" and value co "@example.com"]`, (0, test_util_1.and)((0, test_util_1.eq)("userType", "Employee"), (0, test_util_1.v)("emails", (0, test_util_1.and)((0, test_util_1.eq)("type", "work"), (0, test_util_1.op)("co", "value", "@example.com")))));
        test(`emails[type eq "work" and value co "@example.com"] or ims[type eq "xmpp" and value co "@foo.com"]`, (0, test_util_1.or)((0, test_util_1.v)("emails", (0, test_util_1.and)((0, test_util_1.eq)("type", "work"), (0, test_util_1.op)("co", "value", "@example.com"))), (0, test_util_1.v)("ims", (0, test_util_1.and)((0, test_util_1.eq)("type", "xmpp"), (0, test_util_1.op)("co", "value", "@foo.com")))));
        test(`emails[value[hoge eq "@example.com"] and value[hoge eq "@example.com"]] or name eq "xxx"`, (0, test_util_1.or)((0, test_util_1.v)("emails", (0, test_util_1.and)((0, test_util_1.v)("value", (0, test_util_1.eq)("hoge", "@example.com")), (0, test_util_1.v)("value", (0, test_util_1.eq)("hoge", "@example.com")))), (0, test_util_1.eq)("name", "xxx")));
        test('userType eq "5"', (0, test_util_1.eq)('userType', "5"));
        test('userType eq 5', (0, test_util_1.eq)('userType', 5));
        test('userType eq true', (0, test_util_1.eq)('userType', true));
        test('userType eq null', (0, test_util_1.eq)('userType', null));
        test('userType eq "worker" or userType eq "employee" or userType eq "admin"', (0, src_1.flatten)((0, test_util_1.or)((0, test_util_1.eq)('userType', 'worker'), (0, test_util_1.eq)('userType', 'employee'), (0, test_util_1.eq)('userType', 'admin'))));
        test(`not (emails co "example.com" or emails co "example.org") and userType ne "Employee"`, (0, test_util_1.and)({
            op: "not",
            filter: (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))
        }, (0, test_util_1.op)("ne", "userType", "Employee")));
        test(`userType eq "Employee" and not (emails co "example.com" or emails co "example.org") and userType ne "Employee"`, (0, test_util_1.and)((0, test_util_1.op)("eq", "userType", "Employee"), {
            op: "not",
            filter: (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))
        }, (0, test_util_1.op)("ne", "userType", "Employee")));
        test(`userType eq "Employee" or not (emails co "example.com" or emails co "example.org") and userType ne "Employee"`, (0, test_util_1.or)((0, test_util_1.op)("eq", "userType", "Employee"), (0, test_util_1.and)({
            op: "not",
            filter: (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))
        }, (0, test_util_1.op)("ne", "userType", "Employee"))));
        test(`(userType eq "Employee" or userType eq "Employer") and emails sw "foo" and not (emails co "example.com" or emails co "example.org")`, (0, test_util_1.and)((0, test_util_1.or)((0, test_util_1.op)("eq", "userType", "Employee"), (0, test_util_1.op)("eq", "userType", "Employer")), (0, test_util_1.op)("sw", "emails", "foo"), {
            op: "not",
            filter: (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))
        }));
        test(`userType eq "Employee" and (emails sw "foo" or not (emails co "example.com" or emails co "example.org"))`, (0, test_util_1.and)((0, test_util_1.op)("eq", "userType", "Employee"), (0, test_util_1.or)((0, test_util_1.op)("sw", "emails", "foo"), {
            op: "not",
            filter: (0, test_util_1.or)((0, test_util_1.op)("co", "emails", "example.com"), (0, test_util_1.op)("co", "emails", "example.org"))
        })));
    });
});
//# sourceMappingURL=stringify.test.js.map