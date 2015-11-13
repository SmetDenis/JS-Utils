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

    describe("toInt", function () {
        it("toInt", function () {
            expect(helper.toInt("Kevin van Zonneveld")).toBe(0);
            expect(helper.toInt("4.2")).toBe(4);
            expect(helper.toInt(4.2)).toBe(4);
            expect(helper.toInt("09")).toBe(9);
            expect(helper.toInt("1e", 16)).toBe(30);
            expect(helper.toInt()).toBe(0);
            expect(helper.toInt(null)).toBe(0);
            expect(helper.toInt(undefined)).toBe(0);
            expect(helper.toInt(false)).toBe(0);
            expect(helper.toInt(true)).toBe(1);
        });
    });

}).call(this);
