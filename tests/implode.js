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

    describe("Implode", function () {
        it("implode", function () {
            expect(helper.implode(" ", ["Kevin", "van", "Zonneveld"])).toBe("Kevin van Zonneveld");
            expect(helper.implode(" ", {first: "Kevin", last: "van Zonneveld"})).toBe("Kevin van Zonneveld");
            expect(helper.implode({first: "Kevin", last: "van Zonneveld"})).toBe("Kevinvan Zonneveld");
        });
    });

}).call(this);
