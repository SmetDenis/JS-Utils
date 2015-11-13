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

    describe("Each", function () {
        it("Each", function () {
            expect(helper.rand(1, 1)).toBe(1);

            var i, label, seen, callback;

            seen = {};
            helper.each([3, 4, 5], function (k, v) {
                seen[k] = v;
            });

            expect(seen).toEqual({0: 3, 1: 4, 2: 5});

            seen = {};
            helper.each({"name": "name", "lang": "lang"}, function (k, v) {
                seen[k] = v;
            });
            expect(seen).toEqual({"name": "name", "lang": "lang"});


            seen = [];
            helper.each([1, 2, 3], function (k, v) {
                seen.push(v);
                if (k === 1) {
                    return false;
                }
            });
            expect(seen).toEqual([1, 2]);

            seen = [];
            helper.each({"a": 1, "b": 2, "c": 3}, function (k, v) {
                seen.push(v);
                return false;
            });
            expect(seen).toEqual([1]);

            seen = {
                "Zero": function () {
                },
                "One": function (a) {
                    a = a;
                },
                "Two": function (a, b) {
                    a = a;
                    b = b;
                }
            };

            callback = function (k) {
                expect(k).toBe("foo");
            };

            for (i in seen) {
                label       = i;
                seen[i].foo = "bar";
                helper.each(seen[i], callback);
            }

            seen     = {
                "undefined": undefined,
                "null": null,
                "false": false,
                "true": true,
                "empty string": "",
                "nonempty string": "string",
                "string \"0\"": "0",
                "negative": -1,
                "excess": 1
            };
            callback = function (k) {
                expect(k).toBe("length");
            };
            for (i in seen) {
                label = i;
                helper.each({"length": seen[i]}, callback);
            }

            seen     = {
                "sparse Array": Array(4),
                "length: 1 plain object": {"length": 1, 0: true},
                "length: 2 plain object": {"length": 2, 0: true, 1: true},
                "NodeList": document.getElementsByTagName("html")
            };
            callback = function (k) {
                if (seen[label]) {
                    delete seen[label];
                    expect(k).toBe(0);
                    return false;
                }
            };
            for (i in seen) {
                label = i;
                helper.each(seen[i], callback);
            }

            seen = false;
            helper.each({"length": 0}, function () {
                seen = true;
            });
            expect(!seen).toBeTruthy();

            seen = false;
            helper.each(document.getElementsByTagName("asdf"), function () {
                seen = true;
            });
            expect(!seen).toBeTruthy();

            i = 0;
            helper.each(document.styleSheets, function () {
                i++;
            });
            expect(i).toBe(document.styleSheets.length);
        });
    });

}).call(this);
