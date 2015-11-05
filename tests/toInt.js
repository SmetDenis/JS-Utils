(function () {

    var helper = window.JBZoo;

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

}).call(this);
