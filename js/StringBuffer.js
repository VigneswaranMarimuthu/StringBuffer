
function StringBuffer(){
	
	if(!(this instanceof arguments.callee))
		return new arguments.callee();
	
	/**
	 * @type Private
	 */
	var buffer = new Array();
	
	/**
	 * Method to clear the array
	 */
	Array.prototype.clear = function(){
		this.splice(0, this.length);
	};
	
	/**
	 * Appends the value to the buffer. Returns <code>null</code>, if the value
	 * passed is neither number nor a string.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param String
	 * 
	 * @returns StringBuffer or <code>null</code>
	 */
	this['append'] = function(value){
		if(isNumber(value) || isString(value)){
			buffer.push(value);
			return this;
		}
		return null;
	};
	
	/**
	 * Returns the character present at the passed index. Returns <code>null</code>,
	 * if the passed index is not a number.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param Number
	 * 
	 * @returns String or <code>null</code>
	 */
	this['charAt'] = function(index){
		if(isNumber(index)){
			return buffer.join('').charAt(index);
		}
		return null;
	};
	
	/**
	 * Deletes the characters present between the passed index. By default, 'end'
	 * will be the length of the string buffer. Returns the deleted characters or 
	 * <code>null</code>, if 'start' is not a number.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param Number
	 * @param Number
	 * 
	 * @returns String or <code>null</code>
	 */
	this['delete'] = function(start, end){
		if(isNumber(start)){
			var temp, str = buffer.join('');
			buffer.clear();
			temp = str.substring(0, start);		// TODO: Make sure start and end does not exceed the length of the string buffer.
			if(isNumber(end)){
				if(start < end){
					str = temp.concat(str.substring(end+1));
					buffer.push(str);
					return str.substring(start, end+1);
				}
				else console.debug('Start index should be less than end index.');	
			}
			buffer.push(temp);
			return str.substring(start);
		}
		return null;
	};
	
	/**
	 * Deletes the character present at the passed index. Returns the deleted
	 * character or <code>null</code>, if the passed index is not a number.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param Number
	 * 
	 * @returns String or <code>null</code>
	 */
	this['deleteCharAt'] = function(index){
		if(isNumber(index)){
			var temp, str = buffer.join('');
			buffer.clear();
			temp = str.substring(0, index);
			buffer.push(temp.concat(str.substring(index+1, str.length)));
			return str.substring(index, index+1);
		}
		return null;
	};
	
	/**
	 * Returns the index of the passed value. Returns the position of the passed value or
	 * -1 if the passed value is not present. Returns <code>null</code>, if the passed
	 * index is not a string.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param String
	 * @param Number
	 * 
	 * @returns Number or <code>null</code>
	 */
	this['indexOf'] = function(value, start){
		if(isString(value)){
			return buffer.join('').indexOf(value, isNumber(start) ? start : 0);
		}
		return null;
	};
	
	/**
	 * Inserts the passed value at the specified index. Returns StringBuffer or
	 * <code>null</code>, if improper parameters are passed.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param Number
	 * @param String
	 * 
	 * @returns StringBuffer or <code>null</code>
	 */
	this['insert'] = function(index, value){
		if(isNumber(index) && (isNumber(value) || isString(value))){
			var temp, str = buffer.join('');
			buffer.clear();
			temp = str.substring(0, index);
			buffer.push(temp.concat(value).concat(str.substring(index)));
			return this;
		}
		return null;
	};
	
	/**
	 * Returns the index of the passed value. Here the search will takes place from the
	 * end. Returns the position of the passed value or -1 if the passed value is not
	 * present. Returns <code>null</code>, if the passed index is not a string.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @param String
	 * @param Number
	 * 
	 * @returns Number or <code>null</code>
	 */
	this['lastIndexOf'] = function(value, start){
		if(isString(value)){
			var str = buffer.join('');
			return str.lastIndexOf(value, isNumber(start) ? start : str.length);
		}
		return null;
	};
	
	/**
	 * Returns the length of the StringBuffer.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @returns Number
	 */
	this['length'] = function(){
		return buffer.join('').length;
	};
	
	/**
	 * Returns the string representing the data in the StringBuffer.
	 * 
	 * @author Vigneswaran Marimuthu
	 * 
	 * @returns String
	 */
	this.toString = function(){
		return buffer.join('');
	};
	
	// TODO: IMPLEMENT THE REST AND TEST
	
	/**
	 * Private Utility Methods
	 */
	
	function isNumber(value){
		return Object.prototype.toString.call(value) === "[object Number]";
	}
	function isString(value){
		return Object.prototype.toString.call(value) === "[object String]";
	}
	
}