const removeFromArray = function(array, removeNum) {
	for (i in array){
		if (array[i] == removeNum){
			array.splice(i, 1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
