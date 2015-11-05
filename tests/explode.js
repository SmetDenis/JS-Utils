(function () {

    var helper = window.JBZoo;

    describe("explode", function () {
        it("explode", function () {
            expect(helper.implode(' ', helper.explode('Kevin van Zonneveld'))).toBe('');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld'))).toBe('Kevin van Zonneveld');

            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld', 3))).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld', 2))).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld', 1))).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld', 0))).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', helper.explode(' ', 'Kevin van Zonneveld', -1))).toBe('Kevin van');

            expect(helper.explode('', 'Kevin van Zonneveld')).toBe(false);
            expect(helper.explode(false, 'Kevin van Zonneveld')).toBe(false);
            expect(helper.explode(null, 'Kevin van Zonneveld')).toBe(false);
            expect(helper.explode(undefined, 'Kevin van Zonneveld')).toBe(null);
            //expect(helper.explode({}, 'Kevin van Zonneveld')).toBe({0: ''});
        });
    });

}).call(this);
