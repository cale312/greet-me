describe('Which language to greet in', function(){

  it('returns "Hello" if language selected is english', function(){
    assert.equal('Hello', greetMassage('english'));
  });

  it('returns "Molo" if language selected is xhosa', function(){
    assert.equal('Molo', greetMassage('xhosa'));
  });

  it('returns "Hola" if language selected is espanol', function(){
    assert.equal('Hola', greetMassage('espanol'));
  });

});
