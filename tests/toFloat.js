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

    describe("toFloat", function () {
        it("toFloat", function () {
            expect(helper.toFloat(23)).toBe(23.0);
            expect(helper.toFloat("23")).toBe(23.0);
            expect(helper.toFloat(23.5)).toBe(23.5);
            expect(helper.toFloat(true)).toBe(1.0);
        });
    });

}).call(this);
