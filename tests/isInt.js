(function () {

    var helper = window.JBZoo;

    describe("isInt", function () {
        it("isInt", function () {
            expect(helper.isInt(23)).toBe(true);
            expect(helper.isInt('23')).toBe(false);
            expect(helper.isInt(23.5)).toBe(false);
            expect(helper.isInt(true)).toBe(false);
        });
    });

}).call(this);
