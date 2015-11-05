(function () {

    var helper = window.JBZoo;

    describe("implode", function () {
        it("implode", function () {
            expect(helper.implode(' ', ['Kevin', 'van', 'Zonneveld'])).toBe('Kevin van Zonneveld');
            expect(helper.implode(' ', {first: 'Kevin', last: 'van Zonneveld'})).toBe('Kevin van Zonneveld');
            expect(helper.implode({first: 'Kevin', last: 'van Zonneveld'})).toBe('Kevinvan Zonneveld');
        });
    });

}).call(this);
