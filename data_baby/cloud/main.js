

// create subclass of parse object
var TextData = Parse.Object.extend("TextData");

var textData = new TextData()

textData = {
	userId: 12345,
	mobile: 4155555555,
	message: "bottle",
	timestamp:"10/23/2015"
};

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success(textData);
});
