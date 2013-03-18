
function StringBuffer(){
  
	if(!(this instanceof arguments.callee))
		return new arguments.callee();
	
	var buffer = new Array();
	
	Array.prototype.clear = function(){
		this.splice(0, this.length);
	};
	
	
	this['append'] = function(value){
		if(isNumber(value) || isString(value)){
			buffer.push(value);
			return this;
		}
		return null;
	};
	
	this['charAt'] = function(index){
		if(isNumber(index)){
			return buffer.join('').charAt(index);
		}
		return null;
	};
	
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
	
	this['deleteCharAt'] = function(start){
		if(isNumber(start)){
			var temp, str = buffer.join('');
			buffer.clear();
			temp = str.substring(0, start);
			buffer.push(temp.concat(str.substring(start+1, str.length)));
			return str.substring(start, start+1);
		}
		return null;
	};
	
	this['indexOf'] = function(value, start){
		if(isString(value)){
			return buffer.join('').indexOf(value, isNumber(start) ? start : 0);
		}
		return null;
	};
	
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
	
	this['lastIndexOf'] = function(value, start){
		if(isString(value)){
			var str = buffer.join('');
			return str.lastIndexOf(value, isNumber(start) ? start : str.length);
		}
		return null;
	};
	
	this['length'] = function(){
		return buffer.join('').length;
	};
	
	this['toString'] = function(){
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
