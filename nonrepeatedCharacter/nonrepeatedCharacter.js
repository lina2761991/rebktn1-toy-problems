/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	var arr = string.split('');//[A,A,C,C,B,D,B ]
	var narr = string.split('');//[A,A,C,C,B,D,B ]
	var obj = {};



  for (var i = 0;i<narr.length; i++){

   for(var j=0; j<arr.length; j++){

   	     obj[narr[i]] = 1;

   		if(narr[i] === arr[j] ){
   	
   	  obj[narr[i]] =  obj[narr[i]] + 1;

  		//arr.splice(arr.indexOf(arr[j]), 1); 
  	     arr.splice(i, 1)
  	      i++;
  		
  	// return obj;
  		
  	}

   }


  }

for (var key in obj)
{

 if(obj[key] === 1){
 	return key;

 }
}
};


