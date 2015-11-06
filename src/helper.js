/**
 * JBZoo Helper
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package   Utils
 * @license   MIT
 * @copyright Copyright (C) JBZoo.com,  All rights reserved.
 * @link      https://github.com/JBZoo/Utils
 * @author    Denis Smetannikov <denis@jbzoo.com>
 */

/**
 * JBZoo Helper with custom js functions
 */
(function (window, document, undefined) {

    'use strict';

    var class2type = {},
        types      = ['Boolean', 'Number', 'String', 'Function', 'Array',
            'Date', 'RegExp', 'Object', 'Error', 'Symbol'];

    (function() {
        for (var index in types) {
            class2type['[object ' + types[index] + ']'] = types[index].toLowerCase();
        }
    }());

    window.JBZoo = {

        DEBUG: false,

        /**
         * @link http://phpjs.org/functions/number_format/
         * @param number
         * @param decimals
         * @param decPoint
         * @param thousandsSep
         * @returns {string}
         */
        numFormat: function (number, decimals, decPoint, thousandsSep) {

            number = ('' + number).replace(/[^0-9+\-Ee.]/g, '');

            var num        = !isFinite(+number) ? 0 : +number,
                prec       = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                separator  = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
                decimal    = (typeof decPoint === 'undefined') ? '.' : decPoint,
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + (Math.round(n * k) / k).toFixed(prec);
                };

            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            var result = (prec ? toFixedFix(num, prec) : '' + Math.round(num)).split('.');

            if (result[0].length > 3) {
                result[0] = result[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, separator);
            }

            return result.join(decimal);
        },

        /**
         * Check is variable empty
         * @link http://phpjs.org/functions/empty:392
         * @param mixedVar
         * @return {Boolean}
         */
        empty: function (mixedVar) {
            var $this       = this,
                undefined, i, length,
                emptyValues = [undefined, null, false, 0, '', '0'];

            for (i = 0, length = emptyValues.length; i < length; i++) {
                if (mixedVar === emptyValues[i]) {
                    return true;
                }
            }

            if (typeof mixedVar === 'object') {
                if ($this.count(mixedVar) === 0) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Check and get variable
         *
         * @returns {*}
         */
        get: function () {

            var args = arguments,
                argc = arguments.length;

            if (argc === 1) {
                if (args[0] === undefined || args[0] === null) {
                    return undefined;
                }

                return args[0];

            } else if (argc === 2) {

                if (args[0] === undefined || args[0] === null) {
                    return args[1];
                }

                return args[0];

            } else if (argc === 3) {

                if (args[0][args[1]] === undefined || args[0][args[1]] === null) {
                    return args[2];
                }

                return args[0][args[1]];
            }
        },

        /**
         * Check is variable function
         *
         * @param functionToCheck
         * @returns {boolean}
         */
        isFunc: function (functionToCheck) {
            return this.type(functionToCheck) === 'function';
        },

        /**
         * Get variable type
         *
         * @param mixedVar
         * @returns {*}
         */
        type: function (mixedVar) {

            if (mixedVar == null) {
                return mixedVar + '';
            }

            // Support: Android<4.0 (functionish RegExp)
            return typeof mixedVar === 'object' ||
            typeof mixedVar === 'function' ? (class2type[toString.call(mixedVar)] || 'object') : typeof mixedVar;
        },

        /**
         * Count all elements in an array, or something in an object
         *
         * @link http://php.net/manual/en/function.count.php
         * @link http://phpjs.org/functions/count/
         *
         * @param variable
         * @param isRecursive bool
         * @returns {number}
         */
        count: function (variable, isRecursive) {

            var $this = this, property, result = 0;

            isRecursive = (typeof isRecursive !== 'undefined' && isRecursive) ? true : false;

            if (variable === false ||
                variable === null ||
                typeof variable === 'undefined'
            ) {
                return 0;

            } else if (variable.constructor !== Array && variable.constructor !== Object) {
                return 1;
            }

            for (property in variable) {

                if (variable.hasOwnProperty(property) && !$this.isFunc(variable[property])) {
                    result++;

                    if (isRecursive && variable[property] &&
                        (
                            variable[property].constructor === Array ||
                            variable[property].constructor === Object
                        )
                    ) {
                        result += this.count(variable[property], true);
                    }
                }
            }

            return result;
        },

        /**
         * Finds whether a variable is a number or a numeric string
         *
         * @link http://php.net/manual/ru/function.in-array.php
         * @link http://phpjs.org/functions/in_array/
         *
         * @param needle
         * @param haystack
         * @param strict
         * @return {Boolean}
         */
        inArray: function (needle, haystack, strict) {

            var found = false, key;

            strict = !!strict;

            for (key in haystack) {
                if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
                    found = true;
                    break;
                }
            }

            return found;
        },

        /**
         * Finds whether a variable is a number or a numeric string
         *
         * @link http://php.net/manual/ru/function.is-numeric.php
         * @link http://phpjs.org/functions/is_numeric/
         *
         * @param mixed
         * @returns {boolean}
         */
        isNumeric: function (mixed) {
            return (typeof(mixed) === 'number' || typeof(mixed) === 'string') && mixed !== '' && !isNaN(mixed);
        },

        /**
         * Parse integer from string
         *
         * @link http://phpjs.org/functions/intval/
         *
         * @param mixed
         * @returns {Number}
         */
        toInt: function (mixed, base) {
            var type = typeof mixed;

            base = base || 10;

            if (type === 'boolean') {
                return +mixed;

            } else if (type === 'string') {
                mixed   = mixed.replace(/\s/g, '');
                var tmp = parseInt(mixed, base);
                return (isNaN(tmp) || !isFinite(tmp)) ? 0 : tmp;

            } else if (type === 'number' && isFinite(mixed)) {
                return mixed | 0;

            } else {
                return 0;
            }
        },

        /**
         * Check is variable integer
         *
         * @link http://phpjs.org/functions/is_int/
         *
         * @param mixed
         * @returns {boolean}
         */
        isInt: function (mixed) {
            return mixed === +mixed && isFinite(mixed) && !(mixed % 1);
        },

        /**
         * Parse integer from string
         *
         * @param mixed
         * @returns {Number}
         */
        toFloat: function (mixed) {

            var type = typeof mixed;

            if (type === 'boolean') {
                return +mixed;
            }

            mixed = '' + mixed;
            mixed = mixed.replace(/\s/g, '');
            mixed = mixed.replace(',', '.');
            mixed = (parseFloat(mixed) || 0);
            mixed = this.round(mixed, 9); // hack for numbers like '0.30000000000000004'

            return mixed;
        },

        /**
         * Rounds a float
         *
         * @link http://php.net/manual/en/function.round.php
         * @link http://phpjs.org/functions/round/
         *
         * @param value
         * @param precision
         * @param mode
         * @returns {number}
         */
        round: function (value, precision, mode) {
            // helper variables
            var base, floorNum, isHalf, sign;

            // making sure precision is integer
            precision |= 0;
            base = Math.pow(10, precision);
            value *= base;

            // sign of the number
            sign     = (value > 0) | -(value < 0);
            isHalf   = value % 1 === 0.5 * sign;
            floorNum = Math.floor(value);

            if (isHalf) {
                mode = mode ? mode.toUpperCase() : 'DEFAULT';
                switch (mode) {
                    case 'DOWN':
                        // rounds .5 toward zero
                        value = floorNum + (sign < 0);
                        break;
                    case 'EVEN':
                        // rouds .5 towards the next even integer
                        value = floorNum + (floorNum % 2 * sign);
                        break;
                    case 'ODD':
                        // rounds .5 towards the next odd integer
                        value = floorNum + !(floorNum % 2);
                        break;
                    default:
                        // rounds .5 away from zero
                        value = floorNum + (sign > 0);
                }
            }

            return (isHalf ? value : Math.round(value)) / base;
        },

        /**
         * Generate a random integer
         *
         * @link http://php.net/manual/en/function.rand.php
         * @link http://phpjs.org/functions/rand/
         *
         * @param min
         * @param max
         * @returns {*}
         */
        rand: function (min, max) {
            var $this = this,
                argc  = arguments.length;

            if (argc === 0) {
                min = 0;
                max = 2147483647;

            } else if (argc === 1) {
                throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');

            } else {
                min = $this.toInt(min);
                max = $this.toInt(max);
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        /**
         * Join array elements with a string
         *
         * @link http://php.net/manual/en/function.implode.php
         * @link http://phpjs.org/functions/implode/
         *
         * @param glue
         * @param pieces
         * @returns {*}
         */
        implode: function (glue, pieces) {

            var i      = '',
                $this  = this,
                retVal = '',
                tGlue  = '';

            if (arguments.length === 1) {
                pieces = glue;
                glue   = '';
            }

            if (typeof pieces === 'object') {
                if ($this.type(pieces) === 'array') {
                    return pieces.join(glue);
                }

                for (i in pieces) {
                    retVal += tGlue + pieces[i];
                    tGlue = glue;
                }

                return retVal;
            }
        },

        /**
         * Split a string by string
         *
         * @link http://phpjs.org/functions/explode/
         * @link http://php.net/manual/en/function.explode.php
         *
         * @param delimiter
         * @param string
         * @param limit
         * @returns {*}
         */
        explode: function (delimiter, string, limit) {

            if (arguments.length < 2 ||
                typeof delimiter === 'undefined' ||
                typeof string === 'undefined'
            ) {
                return null;
            }

            if (delimiter === '' ||
                delimiter === false ||
                delimiter === null
            ) {
                return false;
            }

            if (delimiter === true) {
                delimiter = '1';
            }

            // Here we go...
            delimiter += '';
            string += '';

            var splited = string.split(delimiter);

            if (typeof limit === 'undefined') {
                return splited;
            }

            // Support for limit
            if (limit === 0) {
                limit = 1;
            }

            // Positive limit
            if (limit > 0) {
                if (limit >= splited.length) return splited;
                return splited.slice(0, limit - 1)
                    .concat([splited.slice(limit - 1)
                        .join(delimiter)
                    ]);
            }

            // Negative limit
            if (-limit >= splited.length) return [];

            splited.splice(splited.length + limit);

            return splited;
        },

        /**
         * Strip HTML and PHP tags from a string
         *
         * @link http://php.net/manual/en/function.strip-tags.php
         * @link http://phpjs.org/functions/strip_tags/
         *
         * @param input
         * @param allowed
         * @returns {string}
         */
        stripTags: function (input, allowed) {

            allowed = (((allowed || '') + '')
                .toLowerCase()
                .match(/<[a-z][a-z0-9]*>/g) || [])
                .join('');

            var tags               = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

            return input
                .replace(commentsAndPhpTags, '')
                .replace(tags, function ($0, $1) {
                    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                });
        },

        /**
         * Alias for console log + backtrace. For debug only. Works only if environment is 'development' (DEBUG = true)
         *
         * @param vars mixed
         * @param name String
         * @param showTrace Boolean
         * @return {Boolean}
         */
        dump: function (vars, name, showTrace) {

            var $this = this;

            if (!this.DEBUG) {
                return false;
            }

            // Get type
            var type    = '',
                varType = $this.type(vars);

            if (varType === 'string' || varType === 'array') {
                type = ' (' + varType + ', ' + $this.count(vars) + ')';
            } else {
                type = ' (' + varType + ')';
            }

            // Wrap in vars quote if string
            if (varType === 'string') {
                vars = '\'' + vars + '\'';
            }

            // Get var name
            if (!name) {
                name = '...' + type + ' = ';
            } else {
                name += type + ' = ';
            }

            // Dump var
            if (window.parent && window.parent.console && window.parent.console.log) {
                window.parent.console.log(name, vars);
            }

            // Show backtrace
            if (showTrace && typeof console.trace !== 'undefined') {
                console.trace();
                return false;
            }

            return false;
        }
    };

})(window, document);
