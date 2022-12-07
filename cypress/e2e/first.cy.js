

describe('this is my first test suit', function() {
    it('my first test case', function() {
        expect(true).to.equal(true)
    });
    it('this is my second test case', function(){
        expect(true).to.equal(false)
        
    });
    it.skip('this is my third test ', function() {
        expect(true).to.equal(false)
        
    });
    it('this is my 4th test' );
});