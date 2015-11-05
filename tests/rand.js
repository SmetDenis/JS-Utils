(function () {

    var helper = window.JBZoo;

    describe("rand", function () {
        it("rand", function () {
            expect(helper.rand(1, 1)).toBe(1);
            expect(helper.rand()).toBeGreaterThan(0);
            expect(helper.rand(51, 52)).toBeGreaterThan(50);
            expect(helper.rand(51, 52)).toBeLessThan(53);
            expect(function () {
                helper.rand(1);
            }).toThrow(new Error('Warning: rand() expects exactly 2 parameters, 1 given'));
        });
    });

}).call(this);
