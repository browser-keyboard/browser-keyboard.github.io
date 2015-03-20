$(function(){

	var selector = 'textarea, input, [contentEditable]';
  var nonSelector = ':password, :button, :checkbox, :file, :hidden, :image, :radio, :reset, :submit';

	keyboardConnection = function(virtualKeyboard){ 

	  $('html').on('focus', selector, function(e){
	  	if($(this).is(nonSelector))
	  		return false;
	   	virtualKeyboard.setField(this, self);
	   });
	  
	  $('html').on('focus', 'input:password', function(e){
	   	virtualKeyboard.setField(this, self, {animate: false});
	   });
	  
	  $('html').on('blur', selector, function(){
	  	virtualKeyboard.fieldBlur();
	  });

	  $('html').on('keydown', "body", function(e){
	  	virtualKeyboard.keyDown(e);
	  });
	  $('html').on('keyup', "body", function(e){
	  	virtualKeyboard.keyUp(e);
	  });
	  $(window).blur(function(){
	  	virtualKeyboard.browserBlur();
	  });

	  $(window).focus(function(){
	  	virtualKeyboard.browserFocus();
	  });

	};

if(self==window.top){
	window.virtualKeyboard = new Keyboard(keyboardOption);
	keyboardConnection(window.virtualKeyboard);
	
	setTimeout(function(){
		setInterval(function(){
	  	for(var i = 0; i < window.frames.length ; i++){
				if(!window.frames[i].virtualKeyboard){
					window.frames[i].virtualKeyboard = true;
					
//					if($(window.frames[i].document).contents() && $(window.frames[i].document).contents().find('body') && $(window.frames[i].document).contents().find('body').parent()){
					try {

						content = $(window.frames[i].document).contents().find('body').parent();

						content.on('focus', selector, function(e){
					  	if($(this).is(nonSelector))
					  		return false;
				    	 virtualKeyboard.setField(this, e.view.window);
				      });

						content.on('focus', 'input:password', function(e){
				    	 virtualKeyboard.setField(this, e.view.window, {animate: false});
				      });

						content.on('blur', selector, function(){
				    	 virtualKeyboard.fieldBlur();
				     });

						content.on('keydown', selector, function(e){
				    	 virtualKeyboard.keyDown(e);
				     });

						content.on('keyup', selector, function(e){
				    	 virtualKeyboard.keyUp(e);
				     });

				    $(window.frames[i].window).blur(function(){
				    	virtualKeyboard.browserBlur();
				    });

				    $(window.frames[i].window).focus(function(){
				    	virtualKeyboard.browserFocus();
				    });
						
					} catch (e) {
						// TODO: handle exception
					}
						
						
					
				}
	  	}
	  }, 150);
	}, 150);
	
	if(document.activeElement != document.getElementsByTagName('body')[0]){
		if($(document.activeElement).is('input:password')){
	   	virtualKeyboard.setField(document.activeElement, self, {animate: false});
  		return;
		}
		console.log(1);
		/*
		if(!$(document.activeElement).is(selector)){
  		return false;
		}
*/
		if($(document.activeElement).is(nonSelector)){
  		return false;
		}

		console.log(2);
		virtualKeyboard.setField(document.activeElement, self);
		
	}
	
}else{
	parent.$(function(){
		window.virtualKeyboard = parent.window.virtualKeyboard; 
		keyboardConnection(window.virtualKeyboard);
	});
	
}  
});

