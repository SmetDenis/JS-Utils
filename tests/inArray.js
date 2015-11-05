(function () {

    var helper = window.JBZoo;

    describe("inArray", function () {

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

}).call(this);
