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

    describe("Empty", function () {
        it("true", function () {

            expect(helper.empty(null)).toBeTruthy();
            expect(helper.empty(undefined)).toBeTruthy();
            expect(helper.empty("")).toBeTruthy();
            expect(helper.empty(0)).toBeTruthy();
            expect(helper.empty("0")).toBeTruthy();
            expect(helper.empty([])).toBeTruthy();
            expect(helper.empty({})).toBeTruthy();
            expect(helper.empty({
                "func": function () {
                    return true;
                }
            })).toBeTruthy();

        });

        it("false", function () {

            expect(helper.empty(" ")).toBeFalsy();
            expect(helper.empty("1")).toBeFalsy();
            expect(helper.empty(1)).toBeFalsy();
            expect(helper.empty("string")).toBeFalsy();
            expect(helper.empty(true)).toBeFalsy();

            expect(helper.empty({
                "prop": true
            })).toBeFalsy();

            expect(helper.empty({
                "prop": false,
                "func": function () {
                    return true;
                }
            })).toBeFalsy();

        });
    });

}).call(this);
