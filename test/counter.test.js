describe('Counter increments on every new name being greeted', function(){

  it('increments the counter if the name is being greeted for the first time', function(){
    assert.equal(, counter());
  });

});
