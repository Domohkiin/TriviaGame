//Make a start button that loads up the game and starts a timer on click
$(document).ready(function(){
	console.log("ready");
	$("#startButton").click(function(){
		
//Implement a timer that counts down from 30 and ends the game when the time is up, revealing how many
//correct/incorrect answers were given and how many questions weren't answered

		setTimeout(timeUp, 1000 * 2);

		function timeUp(){
			$("#startButton").append("<h2>Time's Up!</h2>");
		}


$.fn.every = function(callback) {
  var numElements = this.length;
  return this.filter(callback).length == numElements;
};

$.fn.simpleQuiz = function(options) {
  if(!this.length) { return; };
	};
	this.each(function(){
		var form = $(this);
		var submitButton = form.find(":submit");
		var questions =form.find(".question");
		var choices = form.find(":radio");

		var init = function() {
			choices.on("change", answerChanged);
			form.on("submit", answerSubmitted);

			answerChanged();
		};
		var answersSubmitted = function(event) {
			if(!hasPassed()) {
				event.preventDefaul();
				alert("Try Again");

			};
		};
		var score = function() {
			return form.find(":checked[data-correct]").length;
		};

		var hasPassed = function() {
			return score() == questions.length;
		};

		var hasCheckedElement = function() {
			return $(this).has(":checked").length;
		};

		var allQuestionsAnswered = function() {
			return question.every(hasCheckedElement);
		};

		var answerChanged = function() {
			if(allQuestionsAnswered()) {
				submitButton.removeAttr("disabled");
			} else {
				submitButton.attr("disabled", "disabled");
			}
			};

			init();
		});
	});
});