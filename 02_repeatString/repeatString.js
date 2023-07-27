const repeatString = function(string, num) {
	let wordCount = "";
	for ( let i = 0; i < num; i++){
		wordCount += string;
	}
	return wordCount;
};

// Do not edit below this line
module.exports = repeatString;
