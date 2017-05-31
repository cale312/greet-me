describe('Counter incremetion...', function(){

  before(function(){
    counter --;
  });

  it('should increment the counter by one if name is being greeted for the first time', function(){
    assert.equal(counter + 1, counterInc('Cale'));
  });

});
