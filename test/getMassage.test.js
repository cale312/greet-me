describe('Which language to greet in...', function(){

  it('returns "Hello" if language selected is English', function(){
    assert.equal('Hello ', getMassage('eng'));
  });

  it('returns "Molo" if language selected is Xhosa', function(){
    assert.equal('Molo ', getMassage('xho'));
  });

  it('returns "Hola" if language selected is Espanol', function(){
    assert.equal('Hola ', getMassage('esp'));
  });

});
