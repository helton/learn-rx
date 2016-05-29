Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(subArray =>
    subArray.forEach(item => results.push(item))
	);
	return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this
		.map(item => projectionFunctionThatReturnsArray(item))
		.concatAll();
};

var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// collect all the words for each number, in every language, in a single, flat list
var allWords = [0,1,2].concatMap(index => spanishFrenchEnglishWords[index]);

console.log(JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]');
