(function () {

    var helper = window.JBZoo;

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

}).call(this);
