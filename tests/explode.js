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

    describe("Explode", function () {
        it("explode", function () {

            expect(helper.explode('', 'qw er ty')).toBeFalsy();
            expect(helper.explode('')).toBeFalsy();
            expect(helper.explode(null)).toBeFalsy();
            expect(helper.explode(undefined)).toBeFalsy();
            expect(helper.explode(false)).toBeFalsy();
            expect(helper.explode('qw er ty')).toBeFalsy();

            expect(helper.explode(' ', 'qw er ty')).toEqual(['qw', 'er', 'ty']);
            expect(helper.explode(' ', 'qw er ty', -4)).toEqual([]);
            expect(helper.explode(' ', 'qw er ty', -3)).toEqual([]);
            expect(helper.explode(' ', 'qw er ty', -2)).toEqual(['qw']);
            expect(helper.explode(' ', 'qw er ty', -1)).toEqual(['qw', 'er']);
            expect(helper.explode(' ', 'qw er ty', 0)).toEqual(['qw er ty']);
            expect(helper.explode(' ', 'qw er ty', 1)).toEqual(['qw er ty']);
            expect(helper.explode(' ', 'qw er ty', 2)).toEqual(['qw', 'er ty']);
            expect(helper.explode(' ', 'qw er ty', 3)).toEqual(['qw', 'er', 'ty']);
            expect(helper.explode(' ', 'qw er ty', 4)).toEqual(['qw', 'er', 'ty']);

            expect(helper.explode(' ', ' qw  er  ty ')).toEqual(['', 'qw', '', 'er', '', 'ty', '']);
            expect(helper.explode(true, 'qw1er1ty')).toEqual(['qw', 'er', 'ty']);
        });
    });

}).call(this);
