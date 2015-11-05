(function () {

    var helper = window.JBZoo;

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

}).call(this);
