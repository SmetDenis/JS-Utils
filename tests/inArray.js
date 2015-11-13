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

    describe("inArray", function () {

        it("invalid", function () {
            expect(helper.inArray("vlado", {0: "Kevin", vlado: "van", 1: "Zonneveld"})).toBe(false);
            expect(helper.inArray(1, ["1", "2", "3"], true)).toBe(false);
        });

        it("valid", function () {
            expect(helper.inArray("van", ["Kevin", "van", "Zonneveld"])).toBe(true);
            expect(helper.inArray(1, ["1", "2", "3"])).toBe(true);
            expect(helper.inArray(1, ["1", "2", "3"], false)).toBe(true);
        });
    });

}).call(this);
