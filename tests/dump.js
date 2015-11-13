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

    describe("Dump", function () {
        it("dump", function () {

            helper.dump("NO");
            helper.DEBUG = true;
            helper.dump("YES");
            helper.DEBUG = false;
            helper.dump("NO");
            helper.DEBUG = true;

            helper.dump(true);
            helper.dump("string");
            helper.dump("string", "label");
            helper.dump("string", "label", true);
            helper.dump("string", "label", false);
            helper.dump([]);
            helper.dump([1, 2, 3]);


        });
    });

}).call(this);
