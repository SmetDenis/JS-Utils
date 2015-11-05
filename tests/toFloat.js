(function () {

    var helper = window.JBZoo;

    describe("toFloat", function () {
        it("toFloat", function () {
            expect(helper.toFloat(23)).toBe(23.0);
            expect(helper.toFloat('23')).toBe(23.0);
            expect(helper.toFloat(23.5)).toBe(23.5);
            expect(helper.toFloat(true)).toBe(1.0);
        });
    });

}).call(this);
