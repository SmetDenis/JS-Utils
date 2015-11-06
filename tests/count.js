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

    describe("Count", function () {

        it("empty", function () {
            expect(helper.count()).toEqual(0);
            expect(helper.count(undefined)).toEqual(0);
            expect(helper.count(false)).toEqual(0);
            expect(helper.count([])).toEqual(0);
        });

        it("simple", function () {
            expect(helper.count('string')).toEqual(1);
            expect(helper.count(true)).toEqual(1);
        });

        it("array", function () {
            expect(helper.count([[0, 0], [0, -4]])).toEqual(2);
            expect(helper.count([[0, 0], [0, -4]], false)).toEqual(2);
            expect(helper.count([[0, 0], [0, -4]], true)).toEqual(6);
        });

        it("object", function () {
            expect(helper.count({})).toEqual(0);
            expect(helper.count({
                "prop1": 1,
                "prop2": 2,
                "prop3": 0,
                "prop4": false,
                "prop5": true,
                "prop6": undefined,
                "prop7": null,
                'func' : function () {
                    return true;
                }
            })).toEqual(7);
        });
    });

}).call(this);
