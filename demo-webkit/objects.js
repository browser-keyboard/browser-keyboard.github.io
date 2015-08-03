var keyboardOption;
$(function(){
	/*[`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -, =, q, w, e, r, t, y, u, i, o, p, [, ], a, s, d, f, g, h, j, k, l, ;, ', ", z, x, c, v, b, n, m, ',', '.', /  ];*/
	var keyCodes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191];
  var englishLayoat = {
    name : "English",
    shortName: "en",
    "letterSet" : [
      [
	        [{}, "`", "~","~","~"],
	        [{"caps": false}, "1", "!","1","!"],
	        [{"caps": false}, "2", "@","2","@"],
	        [{"caps": false}, "3", "#","3","#"],
	        [{"caps": false}, "4", "$","4","$"],
	        [{"caps": false}, "5", "%","5","%"],
	        [{"caps": false}, "6", "^","6","^"],
	        [{"caps": false}, "7", "&","7","&"],
	        [{"caps": false}, "8", "*","8","*"],
	        [{"caps": false}, "9", "(","9","("],
	        [{"caps": false}, "0", ")","0",")"],
	        [{"caps": false}, "-", "_","-","_"],
	        [{"caps": false}, "=", "+","=","+"]
      ],[
	        [{}, "q", "Q","!",""],
	        [{}, "w", "W","@",""],
	        [{}, "e", "E","#",""],
	        [{}, "r", "R","$",""],
	        [{}, "t", "T","%",""],
	        [{}, "y", "Y","^",""],
	        [{}, "u", "U","&",""],
	        [{}, "i", "I","*",""],
	        [{}, "o", "O","(",""],
	        [{}, "p", "P",")",""],
	        [{}, "[", "}","_",""],
	        [{}, "]", "{","+",""],
	        [{}, "\\", "|","",""]
      ],[
	        [{}, "a", "A","«",""],
	        [{}, "s", "S","»",""],
	        [{}, "d", "D","€",""],
	        [{}, "f", "F","£",""],
	        [{}, "g", "G","¥",""],
	        [{}, "h", "H","©",""],
	        [{}, "j", "J","®",""],
	        [{}, "k", "K","÷",""],
	        [{}, "l", "L","",""],
	        [{}, ";", ":","",""],
	        [{}, "'", "\"","",""]
      ],[
	        [{}, "z", "Z","",""],
	        [{}, "x", "X","",""],
	        [{}, "c", "C","",""],
	        [{}, "v", "V","",""],
	        [{}, "b", "B","",""],
	        [{}, "n", "N","",""],
	        [{}, "m", "M","",""],
	        [{}, ",", "<","",""],
	        [{}, ".", ">","",""],
	        [{}, "/", "?","",""]
      ]
    ]
  };

 
  var keyBackspace = {
  	func: 'keyBackspace',
  	title: 'A',
  	code: 8
  }
  var keyCaps = {
		func: 'keyCaps',
		title: 'D'
  }
  var keyNextLanguage = {
		func: 'keyNextLanguage',
		title: 'Shift + \' \''
  }
  var keySpace = {
		func: 'keySpace',
		title: '',
  	code: 32
  }
  var keyAddit = {
		func: 'keyAddit',
		title: '!@#$'
  }
  var keyShift = {
		func: 'keyShift',
		title: 'C'
	}
  var keyEnter = {
		func: 'keyEnter',
		title: 'F',
  	code: 13
  }
  var keyShiftEnter = {
		func: 'keyShiftEnter',
		title: 'Shift+Enter'
  }
  
  var keyDelete = {
		func: 'keyDelete',
		title: 'B',
  	code: 46
  };

  var keyAdditLong = {
  	func: 'keyAdditLong',
  	title: '!@#$'
  };
  
  var comboAdditLong = {
  		when: 'down',
  		ctrl: true,
  		alt: true,
  		code: 32,
  		keyFunction: 'keyAdditLong',
    	func: 'keyAdditLong',
  };
  
  var comboNextLanguage = {
  	when: 'down',
  	shift: true,
  	code: 32,
  	keyFunction: 'keyNextLanguage',
  	func: 'keyNextLanguage'
  };

  var comboCaps = {
  	when: 'down',
  	code: 20,
  	keyFunction: 'keyCaps',
  	func: 'keyCaps'
  };
  var comboShift = {
  	when: 'while',
  	shift: true,
  	keyFunction: 'keyShift',
  	func: 'keyShift'
  };
  var comboAddit = {
  	when: 'while',
  	ctrl: true,
  	alt: true,
  	keyFunction: 'keyAddit',
  	func: 'keyAddit'
  };


  keyboardOption = {
    languageSet: [englishLayoat, yourLayoat],

    keySet : [
      ['layout', keyBackspace],
      ['layout', keyDelete],
      [keyCaps, 'layout', keyEnter ],
      [keyShift, 'layout', keyShift],
      [keyNextLanguage, keySpace, keyAddit, keyAdditLong]
    ],
    keyCodes: keyCodes,
    combos: [comboNextLanguage, comboCaps, comboShift, comboAddit, comboAdditLong]
  }
});
