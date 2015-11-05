(function () {

    var helper = window.JBZoo;

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

}).call(this);
