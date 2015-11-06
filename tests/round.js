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

    describe("round", function () {
        it("round", function () {
            expect(helper.round(1241757, -3)).toBe(1242000);
            expect(helper.round(3.6)).toBe(4);
            expect(helper.round(2.835, 2)).toBe(2.84);
            expect(helper.round(1.1749999999999, 2)).toBe(1.17);
            expect(helper.round(58551.799999999996, 2)).toBe(58551.8);
        });

        it("default", function () {
            expect(helper.round(123.4)).toBe(123);
            expect(helper.round(123.5)).toBe(124);
            expect(helper.round(123.6)).toBe(124);
        });

        it("default, 0", function () {
            expect(helper.round(123.4, 0)).toBe(123);
            expect(helper.round(123.5, 0)).toBe(124);
            expect(helper.round(123.6, 0)).toBe(124);
        });

        it("down", function () {
            expect(helper.round(123.4, 0, 'down')).toBe(123);
            expect(helper.round(123.5, 0, 'down')).toBe(123);
            expect(helper.round(123.6, 0, 'down')).toBe(124);
        });

        it("even", function () {
            expect(helper.round(123.4, 0, 'even')).toBe(123);
            expect(helper.round(123.5, 0, 'even')).toBe(124);
            expect(helper.round(123.6, 0, 'even')).toBe(124);
        });

        it("odd", function () {
            expect(helper.round(123.4, 0, 'Odd')).toBe(123);
            expect(helper.round(123.5, 0, 'ODD')).toBe(123);
            expect(helper.round(123.6, 0, 'odd')).toBe(124);
        });
    });

}).call(this);
