var content = $("#main-content");

var questions = [{
	question: "What is the air speed velocity of an unlaiden swallow?",
	answers: ["What? I don't know", "African or European?", "20?", "30 Speed"],
	correctAnswer: "African or European?"
}, {
	question: "What is the music of life?",
	answers: ["Silence, my brother.", "Um... the lute? No, drums!", "Screaming?", "Some kind of choir. With chanting."],
	correctAnswer: "Silence, my brother."
},	{
	question: "Which of the following is not part of a perfect group?",
	answers: ["Muscles", "Brains", "Looks", "Wildcard", "None of the above"],
	correctAnswer: "None of the above"
}, {
	question: "What is the name of Steve Buscemi's character in \"Reservoir Dogs\"?",
	answers: ["Mr. White", "Mr. Orange", "Mr. Pink", "Mr. Blonde"],
	correctAnswer: "Mr. Pink"
}, {
	question: "What is Walter White's professional alter ego?",
	answers: ["Howerton", "Hawthorne", "Heisenberg", "Cranston"],
	correctAnswer: "Heisenberg"
}, {
	question: "What is Master Chief's Spartan Number?",
	answers: ["87", "115", "171", "117"],
	correctAnswer: "117" 
}, {
	question: "What is the order of the Avatar cycle?",
	answers: ["Water, Air, Earth, Fire", "Fire, Air, Water, Earth", "Earth, Water, Air, Fire", "Air, Fire, Water, Earth"],
	correctAnswer: "Fire, Air, Water, Earth"
}, {
	question: "What is the name of Light Yagami's nemesis in \"Death Note\"?",
	answers: ["Kira", "L", "Misa", "Watari"],
	correctAnswer: "L"
}, {
	question: "What is the name of The Black Swordsman's sword?",
	answers: ["Dragonslayer", "Excalibur", "Chikage", "Kurikara"],
	correctAnswer: "Dragonslayer"
}];

var timer;

var game = {

	correct: 0,
	incorrect: 0,
	counter: 160,

	countdown: function() {
	game.counter--;
	$("#time").html(game.counter);
	if (game.counter === 0) {
		console.log("GAME OVER");
		game.over();
	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);

  	$("#sub-wrapper").prepend("<h2>Time Left: <span id='time'>160</span Seconds</h2>");

  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
  	  content.append("<h2>" + questions[i].question + "</h2>");
  	  for (var j = 0; j < questions[i].answers.length; j++) {
  		content.append("<input type='radio' name='question-" + i +
  		"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
  		}
  	}
  	content.append("<button id='done'>Done</button>");
  },

  over: function() {

	$.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

},

  
    result: function() {
    	clearInterval(timer);

    	$("#sub-wrapper h2").remove();

    	content.html("<h2>The End</h2>");
    	content.append("<h3>Correct Answers: " + this.correct + "</h3>");
    	content.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    	content.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

}
};

$(document).on("click", "#start", function(){
	game.start();
})

$(document).on("click", "#done", function(){
	game.over();
})



