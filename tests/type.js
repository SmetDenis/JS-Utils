/**
 * JBZoo Helper
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package   JS-Utils
 * @license   MIT
 * @copyright Copyright (C) JBZoo.com,  All rights reserved.
 * @link      https://github.com/JBZoo/JS-Utils
 * @author    Denis Smetannikov <denis@jbzoo.com>
 */

(function () {
    "use strict";

    var helper = window.JBZoo;

    describe("Type", function () {

        it("empty", function () {
            expect(helper.type(null)).toEqual("null");

            expect(helper.type()).toEqual("undefined");
            expect(helper.type(undefined)).toEqual("undefined");

            expect(helper.type(true)).toEqual("boolean");
            expect(helper.type(false)).toEqual("boolean");
            expect(helper.type(Boolean(true))).toEqual("boolean");

            expect(helper.type(0)).toEqual("number");
            expect(helper.type(1)).toEqual("number");
            expect(helper.type(Number(1))).toEqual("number");

            expect(helper.type("")).toEqual("string");
            expect(helper.type("a")).toEqual("string");
            expect(helper.type(String("a"))).toEqual("string");

            expect(helper.type({})).toEqual("object");

            expect(helper.type(/foo/)).toEqual("regexp");
            expect(helper.type(new RegExp("asdf"))).toEqual("regexp");

            expect(helper.type([1])).toEqual("array");
            expect(helper.type(new Date())).toEqual("date");

            expect(helper.type(new Function("return;"))).toEqual("function");
            expect(helper.type(function () {
            })).toEqual("function");

            expect(helper.type(new Error())).toEqual("error");

            // Avoid Lint complaints
            var MyString  = String,
                MyNumber  = Number,
                MyBoolean = Boolean,
                MyObject  = Object;

            expect(helper.type(new MyBoolean(true))).toEqual("boolean");
            expect(helper.type(new MyNumber(1))).toEqual("number");
            expect(helper.type(new MyString("a"))).toEqual("string");
            expect(helper.type(new MyObject())).toEqual("object");
        });
    });

}).call(this);
