const expect = require('chai').expect;

describe('some simple test', function() {
    it('test equal', function() {
        expect(4 + 5).to.equal(9);
    })

    it('test object equal', function() {
        expect({
            'name': 'teren'
        }).to.deep.equal({
            'name': 'teren'
        })
    })
})
