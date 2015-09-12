'use strict';
console.log('sdsd');
(function(ext) {

  ext.passcode = function(question, code, callback) {
    console.log('Question and Code are ', question,  code);
    //returning locally

    callback('Input for '+question);
//    $.ajax({
//      url: 'http://localhost',
//      success: function( result ) {
//        callback(result);
//      }
//    });
  };

  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  ext.answer = function(answer, callback) {
    console.log(answer);

    callback('answer submission successful');
//    $.ajax({
//      url: 'http://localhost',
//      success: function( result ) {
//        callback(result);
//      }
//    });
  };

  var descriptor = {
    blocks: [
      ['r', 'input of %m.question passcode %s ', 'passcode', 'question1', 'mypasscode'],
      [' ', 'answer %s', 'answer', 'myanswer'],
    ],
    menus: {
      question: ['Problem-1', 'Problem-2', 'Problem-3']
    }
  };

  var regInt = setInterval(function(){
    try{
      var ScratchExtensions = ScratchExtensions || {};
      ScratchExtensions.register('Scratch Competition', descriptor, ext);
      clearInterval(regInt);
    }catch (e){
      //Scratch is not setup
      //retry next time
    }
  },1000);
})({});

