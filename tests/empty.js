(function () {

    var helper = window.JBZoo;

    describe("numFormat", function () {
        it("empty", function () {
            expect(helper.numFormat()).toBe('0');
            expect(helper.numFormat('')).toBe('0');
            expect(helper.numFormat(0)).toBe('0');
            expect(helper.numFormat('0')).toBe('0');
            expect(helper.numFormat(false)).toBe('0');
        });

        it("numbers", function () {
            expect(helper.numFormat(1234.56, 2, ',', ' ')).toBe('1 234,56');
            expect(helper.numFormat(1234.5678, 2, '.', '')).toBe('1234.57');
            expect(helper.numFormat(67, 2, ',', '.')).toBe('67,00');
            expect(helper.numFormat(1000)).toBe('1,000');
            expect(helper.numFormat(67.311, 2)).toBe('67.31');
            expect(helper.numFormat(1000.55, 1)).toBe('1,000.6');
            expect(helper.numFormat(67000, 5, ',', '.')).toBe('67.000,00000');
            expect(helper.numFormat(0.9, 0)).toBe('1');
            expect(helper.numFormat('1.20', 2)).toBe('1.20');
            expect(helper.numFormat('1.20', 4)).toBe('1.2000');
            expect(helper.numFormat('1.2000', 3)).toBe('1.200');
            expect(helper.numFormat('1 000,50', 2, '.', ' ')).toBe('100 050.00');
            expect(helper.numFormat(1e-8, 8, '.', '')).toBe('0.00000001');
        });
    });

    describe("empty", function () {
        it("empty", function () {

            expect(helper.empty(null)).toBe(true);
            expect(helper.empty(undefined)).toBe(true);
            expect(helper.empty([])).toBe(true);
            expect(helper.empty({})).toBe(true);

            expect(helper.empty({
                'aFunc': function () {
                    alert('humpty');
                }
            })).toBe(false);

        });
    });

    describe("in_array", function () {

        it("invalid", function () {
            expect(helper.inArray('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'})).toBe(false);
            expect(helper.inArray(1, ['1', '2', '3'], true)).toBe(false);
        });

        it("valid", function () {
            expect(helper.inArray('van', ['Kevin', 'van', 'Zonneveld'])).toBe(true);
            expect(helper.inArray(1, ['1', '2', '3'])).toBe(true);
            expect(helper.inArray(1, ['1', '2', '3'], false)).toBe(true);
        });
    });

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

    describe("toInt", function () {

        it("toInt", function () {
            expect(helper.toInt('Kevin van Zonneveld')).toBe(0);
            expect(helper.toInt('4.2')).toBe(4);
            expect(helper.toInt(4.2)).toBe(4);
            expect(helper.toInt('09')).toBe(9);
            expect(helper.toInt('1e', 16)).toBe(30);
            expect(helper.toInt()).toBe(0);
            expect(helper.toInt(null)).toBe(0);
            expect(helper.toInt(undefined)).toBe(0);
            expect(helper.toInt(false)).toBe(0);
            expect(helper.toInt(true)).toBe(1);
        });
    });

    describe("toFloat", function () {
        it("toFloat", function () {
            expect(helper.toFloat(23)).toBe(23.0);
            expect(helper.toFloat('23')).toBe(23.0);
            expect(helper.toFloat(23.5)).toBe(23.5);
            expect(helper.toFloat(true)).toBe(1.0);
        });
    });

    describe("isInt", function () {
        it("isInt", function () {
            expect(helper.isInt(23)).toBe(true);
            expect(helper.isInt('23')).toBe(false);
            expect(helper.isInt(23.5)).toBe(false);
            expect(helper.isInt(true)).toBe(false);
        });
    });

    describe("round", function () {
        it("round", function () {

            expect(helper.round(1241757, -3)).toBe(1242000);
            expect(helper.round(3.6)).toBe(4);
            expect(helper.round(2.835, 2)).toBe(2.84);
            expect(helper.round(1.1749999999999, 2)).toBe(1.17);
            expect(helper.round(58551.799999999996, 2)).toBe(58551.8);
        });
    });

    describe("rand", function () {
        it("rand", function () {
            expect(helper.rand(1, 1)).toBe(1);
        });
    });

    describe("implode", function () {
        it("implode", function () {
            expect(helper.implode(' ', ['Kevin', 'van', 'Zonneveld'])).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', {first: 'Kevin', last: 'van Zonneveld'})).toBe('Kevin van Zonneveld');
            expect(helper.implode({first: 'Kevin', last: 'van Zonneveld'})).toBe('Kevinvan Zonneveld');
        });
    });

    describe("stripTags", function () {
        it("stripTags", function () {
            expect(helper.stripTags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>'))
                .toBe('Kevin <b>van</b> <i>Zonneveld</i>');

            expect(helper.stripTags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>'))
                .toBe('<p>Kevin van Zonneveld</p>');

            expect(helper.stripTags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>"))
                .toBe("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>");

            expect(helper.stripTags('1 < 5 5 > 1')).toBe('1 < 5 5 > 1');
            expect(helper.stripTags('1 <br/> 1')).toBe('1  1');
            expect(helper.stripTags('1 <br/> 1', '<br>')).toBe('1 <br/> 1');
            expect(helper.stripTags('1 <br/> 1', '<br><br/>')).toBe('1 <br/> 1');
            expect(helper.stripTags('1 <br> 1', '<br><br/>')).toBe('1 <br> 1');
            expect(helper.stripTags(' 1 <br><br/> 1 ')).toBe(' 1  1 ');
        });
    });

    describe("explode", function () {
        it("explode", function () {
            expect(helper.implode(' ', helper.explode('Kevin van Zonneveld'))).toBe('');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld'))).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld', 2))).toBe('Kevin van Zonneveld');
            expect(helper.explode('', 'Kevin van Zonneveld')).toBe(false);
            expect(helper.explode(false, 'Kevin van Zonneveld')).toBe(false);
            expect(helper.explode(null, 'Kevin van Zonneveld')).toBe(false);
            expect(helper.explode(undefined, 'Kevin van Zonneveld')).toBe(null);
            //expect(helper.explode({}, 'Kevin van Zonneveld')).toBe({0: ''});
        });
    });

}).call(this);
