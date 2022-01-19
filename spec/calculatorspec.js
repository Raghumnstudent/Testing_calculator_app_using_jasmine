class Calsi{
    add(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }

    mul(a,b){
        return a*b;
    }

    div(a,b){
        return a/b;
    }
}
describe('calculator Test',function(){
    var calsi;
    beforeAll(function()
    {
        console.log('executed Before All specifications')
    })
    afterAll(function(){
        console.log('executed After All Specification')
    })
    beforeEach(function(){
      calsi = new Calsi();
    });
    afterEach(function(){
        calsi=null;
    });


    it('should return addition', function(){
        // console.log(calsi.add(2,4));
        expect(calsi.add(3,4)).toEqual(7);
        expect(calsi.add(3,4)).not.toBeGreaterThan(7);
        expect(calsi.add(3,4)).not.toBeLessThan(7);
        expect(calsi.add(3,4)).not.toBeNull();
    })


    it('should return subtration', function(){
        // console.log(calsi.sub(7,5));
        expect(calsi.sub(7,5)).toEqual(2);
        expect(calsi.sub(7,5)).not.toBeGreaterThan(2);
        expect(calsi.sub(7,5)).not.toBeLessThan(2);
        expect(calsi.sub(7,5)).not.toBeNull();
    })

    it('should return multiplication', function(){
        // console.log(calsi.mul(2,4));
        expect(calsi.mul(3,4)).toEqual(12);
        expect(calsi.mul(3,4)).not.toBeGreaterThan(12);
        expect(calsi.mul(3,4)).not.toBeLessThan(12);
        expect(calsi.mul(3,4)).not.toBeNull();
    })

    it('should return divition', function(){
        // console.log(calsi.div(10,2));
        expect(calsi.div(10,2)).toEqual(5);
        expect(calsi.div(10,2)).not.toBeGreaterThan(5);
        expect(calsi.div(10,2)).not.toBeLessThan(5);
        expect(calsi.div(10,2)).not.toBeNull();
    })
});