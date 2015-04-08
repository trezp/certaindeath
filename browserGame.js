var start = document.getElementById('readyToDie');
var question = document.getElementById('question');
var button1 = document.getElementById('door1');
var button2 = document.getElementById('door2');
var dead = document.getElementById('dead');
var startOver = document.getElementById('start-over')


var controls = {

	toggleButtons : function(){
		if(button1.style.display = "inline-block"){
			button1.style.display = "none";
			button2.style.display = "none";
		} else if (button1.style.display = "none"){
			button1.style.display = "inline-block";
			button2.style.display = "inline-block";
		}
	},
 
	makeView : function(buttonName1, buttonName2, message){
		start.style.display = "none";
		button1.style.display = "inline-block";
		button2.style.display = "inline-block";
		button1.innerHTML = buttonName1; 
		button2.innerHTML = buttonName2; 
		question.innerHTML = message; 
	},
	getStarted : function(){
		controls.toggleButtons();
		start.style.display = "none";
		paths.forestOrMountain();
	},

	startAgain: function(){
		location.reload();
	}, 

	deathView: function(){
		controls.toggleButtons();
		dead.style.display = "block";
		startOver.style.display = "block";
	}

}

//controls.makeView("Unicorns", "Fairies", "You stumble upon a meadow of fairies and unicorns. Ride the unicorns or practice magic with the fairies?");
start.addEventListener("click", controls.getStarted);
startOver.addEventListener("click", controls.startAgain);


var paths = {

	forestOrMountain : function(){
		controls.makeView("Forest", "Mountain", "Frolic in the forest of maruade up the mountain?");
		button1.addEventListener("click", paths.treehouseOrMeadow);
		button2.addEventListener("click", paths.campingOrHiking);
	}, 

	treehouseOrMeadow : function (){
		controls.makeView("Treehouse", "Meadow", "Climb up to the treehouse or frolic in the meadow?");
		button1.addEventListener("click", deaths.zombieMonkeys);
		button2.addEventListener("click", deaths.stampedingDeer);
	},

	campingOrHiking : function (){
		controls.makeView("Camping", "Hiking", "Camp in the serene mountain peaks, or hike to the summit?");
		button1.addEventListener("click", deaths.badMarshmallow);
		button2.addEventListener("click", deaths.avalanche);
	}
};
	
	
var deaths = {
	zombieMonkeys : function (){
		question.innerHTML = "You've been eaten by a hoard of zombie monkeys. Pity.";
		controls.deathView();
	}, 

	stampedingDeer : function (){
		question.innerHTML = "You've been caught beneathe the unforgiving hooves of a hoard of stampeding deer. We'll miss you.";
		controls.deathView();
	},
	badMarshmallow : function (){
		question.innerHTML = "All those roasted marshmallows just didn't agree with you. You died.";
		controls.deathView();
	},

	avalanche : function (){
		question.innerHTML = "Ah, snow. So majestic, so unstable. You were crushed in an avalanche.";
		controls.deathView();
	}

}






