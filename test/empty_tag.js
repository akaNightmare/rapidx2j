var assert = require('assert'),
    r = require('../build/Release/rapidx2j'),
    x = '<a><b></b></a>';

describe('empty_tag_value', function () {
    it('should return defined empty value', function () {
        var a = r.parse(x, { empty_tag_value: null }),
            b = r.parse(x),
            c = r.parse(x, {});

        assert.equal(a.b, null);
        assert.equal(b.b, true);
        assert.equal(c.b, true);
    });
});
