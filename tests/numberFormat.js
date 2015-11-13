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

    describe("numFormat", function () {
        it("empty", function () {
            expect(helper.numFormat()).toBe("0");
            expect(helper.numFormat("")).toBe("0");
            expect(helper.numFormat(0)).toBe("0");
            expect(helper.numFormat("0")).toBe("0");
            expect(helper.numFormat(false)).toBe("0");
        });

        it("numbers", function () {
            expect(helper.numFormat(1234.56, 2, ",", " ")).toBe("1 234,56");
            expect(helper.numFormat(1234.5678, 2, ".", "")).toBe("1234.57");
            expect(helper.numFormat(67, 2, ",", ".")).toBe("67,00");
            expect(helper.numFormat(1000)).toBe("1,000");
            expect(helper.numFormat(67.311, 2)).toBe("67.31");
            expect(helper.numFormat(1000.55, 1)).toBe("1,000.6");
            expect(helper.numFormat(67000, 5, ",", ".")).toBe("67.000,00000");
            expect(helper.numFormat(0.9, 0)).toBe("1");
            expect(helper.numFormat("1.20", 2)).toBe("1.20");
            expect(helper.numFormat("1.20", 4)).toBe("1.2000");
            expect(helper.numFormat("1.2000", 3)).toBe("1.200");
            expect(helper.numFormat("1 000,50", 2, ".", " ")).toBe("100 050.00");
            expect(helper.numFormat(1e-8, 8, ".", "")).toBe("0.00000001");
        });
    });

}).call(this);
