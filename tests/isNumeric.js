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

    describe("isNumeric", function () {

        it("valid", function () {
            expect(helper.isNumeric('186.31')).toBe(true);
            expect(helper.isNumeric(' +186.31e2')).toBe(true);
            expect(helper.isNumeric(' +186.31e2')).toBe(true);
            expect(helper.isNumeric('1 ')).toBe(true);
        });

        it("invalid", function () {
            expect(helper.isNumeric('Kevin van Zonneveld')).toBe(false);
            expect(helper.isNumeric('')).toBe(false);
            expect(helper.isNumeric([])).toBe(false);
            expect(helper.isNumeric({})).toBe(false);
        });
    });

}).call(this);
