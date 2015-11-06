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

    describe("isInt", function () {
        it("isInt", function () {
            expect(helper.isInt(23)).toBe(true);
            expect(helper.isInt('23')).toBe(false);
            expect(helper.isInt(23.5)).toBe(false);
            expect(helper.isInt(true)).toBe(false);
        });
    });

}).call(this);
