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

    var arr = [1, 2, 3],
        obj = {
            "prop"     : "string",
            "boolTrue" : true,
            "boolFalse": false
        };

    describe("Get", function () {

        it("Arg 1", function () {

            expect(helper.get("string")).toEqual("string");

            expect(helper.get(arr)).toEqual(arr);
            expect(helper.get(arr[1])).toEqual(2);

            expect(helper.get(obj["prop"])).toEqual("string");
            expect(helper.get(obj.prop)).toEqual("string");
            expect(helper.get(obj["boolTrue"])).toEqual(true);
            expect(helper.get(obj["boolFalse"])).toEqual(false);
            expect(helper.get(obj["qwerty"])).toEqual(undefined);
        });

        it("Arg 2", function () {
            expect(helper.get(obj.boolFalse, "qwerty")).toEqual(false);
            expect(helper.get(obj.boolTrue, "qwerty")).toEqual(true);

            expect(helper.get(obj["qwerty"], "qwerty")).toEqual("qwerty");
            expect(helper.get(obj["qwerty"], "qwerty")).toEqual("qwerty");
            expect(helper.get(obj.qwerty, "qwerty")).toEqual("qwerty");
        });

        it("Arg 3", function () {
            expect(helper.get(arr, "1", false)).toEqual(2);
            expect(helper.get(arr, 42, "42")).toEqual("42");

            expect(helper.get(obj, "boolTrue", "qwerty")).toEqual(true);
            expect(helper.get(obj, "boolFalse", "qwerty")).toEqual(false);

        });
    });

}).call(this);
