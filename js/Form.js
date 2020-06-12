class Form{
	constructor(){
		this.name = createInput("");
		this.email = createInput("");
		this.nameText = createElement('h3',"Name:");
		this.emailText = createElement('h3',"Email:");
		this.text1 = createElement('h2',"*1. Personal Information");
		
		this.firstQ = createElement('h2',"2. How much thought do you give to saving energy in your home?");
		this.radio1 = createRadio();
		this.radio1.option('A lot');
		this.radio2 = createRadio();
		this.radio2.option('A fair amount');
		this.radio3 = createRadio();
		this.radio3.option('Not very much');
		this.radio4 = createRadio();
		this.radio4.option('None at all');

		this.secondQ = createElement('h2',"3. How many low energy light bulbs do you have in your home?");
		this.sub1 = createElement('h3', "Compact flourescent bulbs");
		this.number = createSelect();
		this.number.option('1');
		this.number.option('2');
		this.number.option('3');
		this.number.option('4');
		this.number.option('5');
		this.number.option('more than 5');
		this.sub2 = createElement('h3', "LED light bulbs");
		this.number2 = createSelect();
		this.number2.option('1');
		this.number2.option('2');
		this.number2.option('3');
		this.number2.option('4');
		this.number2.option('5');
		this.number2.option('more than 5');

		this.thirdQ = createElement('h2',"4. Please rate how strongly you feel each one of the following is responsible for the");
		this.thirdQB = createElement('h2',"climate change and its effects today, on a scale of 1 to 5.");
		this.public = createElement('h3',"Public");
		this.radio5 = createRadio();
		this.radio5.option('||||||||||||||||||||||||||||||||||||1');
		this.radio5.option('||||||||||||||||||||||||||||||||||||2');
		this.radio5.option('|||||||||||||||||||||||||||||||||||3');
		this.radio5.option('|||||||||||||||||||||||||||||||||||4');
		this.radio5.option('||||||||||||||||||||||||||||||||||||5');

		this.government = createElement('h3',"Government");
		this.radio6 = createRadio();
		this.radio6.option('||||||||||||||||||||||||||||||||||||1');
		this.radio6.option('||||||||||||||||||||||||||||||||||||2');
		this.radio6.option('|||||||||||||||||||||||||||||||||||3');
		this.radio6.option('|||||||||||||||||||||||||||||||||||4');
		this.radio6.option('||||||||||||||||||||||||||||||||||||5');

		this.industry = createElement('h3',"Industries");
		this.radio7 = createRadio();
		this.radio7.option('||||||||||||||||||||||||||||||||||||1');
		this.radio7.option('||||||||||||||||||||||||||||||||||||2');
		this.radio7.option('|||||||||||||||||||||||||||||||||||3');
		this.radio7.option('|||||||||||||||||||||||||||||||||||4');
		this.radio7.option('||||||||||||||||||||||||||||||||||||5');

		this.nature = createElement('h3',"Nature itself");
		this.radio8 = createRadio();
		this.radio8.option('||||||||||||||||||||||||||||||||||||1');
		this.radio8.option('||||||||||||||||||||||||||||||||||||2');
		this.radio8.option('|||||||||||||||||||||||||||||||||||3');
		this.radio8.option('|||||||||||||||||||||||||||||||||||4');
		this.radio8.option('||||||||||||||||||||||||||||||||||||5');

		this.fifthQ = createElement('h2',"5. Do you use renewable energy at home?");
		this.radio9 = createRadio();
		this.radio9.option('Yes');
		this.radio9.option('No');

		this.title = createElement('h1',"Save Energy - Survey");

		this.info = createElement('h2',"Save Today. Survive Tomorrow.");
		this.info2 = createElement('h3',"Following are the questions to gather information about public's opinion about saving energy and the factors");
		this.info3 = createElement('h3'," that influence the use of green energy.");

		this.submit = createButton('Submit');

		this.one = createElement('h3',"1");
		this.two = createElement('h3',"2");
		this.three = createElement('h3',"3");
		this.four = createElement('h3',"4");
		this.five = createElement('h3',"5");
	}
	display(){
		this.name.position(displayWidth/4.2-10,displayHeight/6.2-2);
		this.name.size(200,15);
		this.email.position(displayWidth/4.2-10,displayHeight/5.2+0.1);
		this.email.size(200,15);
		this.nameText.position(displayWidth/2-450,displayHeight/6.2-24);
		this.emailText.position(displayWidth/2-450,displayHeight/6+4);
		this.text1.position(displayWidth/2-462,displayHeight/10-5);

		this.firstQ.position(displayWidth/2-450,displayHeight/4.6);
		this.radio1.position(displayWidth/2-455,displayHeight/3.6);
		this.radio2.position(displayWidth/2-455,displayHeight/3.2);
		this.radio3.position(displayWidth/2-455,displayHeight/2.87);
		this.radio4.position(displayWidth/2-455,displayHeight/2.6);

		this.secondQ.position(displayWidth/2-450,displayHeight/2.5);
		this.sub1.position(displayWidth/2-450,displayHeight/2.25);
		this.number.position(displayWidth/2-230,displayHeight/2.14);
		this.sub2.position(displayWidth/2-450,displayHeight/2.1);
		this.number2.position(displayWidth/2-230,displayHeight/2.0);

		this.thirdQ.position(displayWidth/2-450,displayHeight/1.915);		
		this.thirdQB.position(displayWidth/2-450,displayHeight/1.8);	
		this.public.position(displayWidth/2-450,displayHeight/1.55);
		this.radio5.position(displayWidth/2-190,displayHeight/1.5);
		this.radio5.style('width','600px');
		this.radio5.style('color',"white");

		this.government.position(displayWidth/2-450,displayHeight/1.45);
		this.radio6.position(displayWidth/2-190,displayHeight/1.405);
		this.radio6.style('width','600px');
		this.radio6.style('color',"white");

		this.industry.position(displayWidth/2-450,displayHeight/1.36);
		this.radio7.position(displayWidth/2-190,displayHeight/1.32);
		this.radio7.style('width','600px');
		this.radio7.style('color',"white");

		this.nature.position(displayWidth/2-450,displayHeight/1.28);
		this.radio8.position(displayWidth/2-190,displayHeight/1.245);
		this.radio8.style('width','600px');
		this.radio8.style('color',"white");

		this.fifthQ.position(displayWidth/2-450,displayHeight/1.215);
		this.radio9.position(displayWidth/2-455,displayHeight/1.129);
		this.radio9.style('width','50px');

		this.title.position(displayWidth/2-120,displayHeight/10-115);

		this.info.position(displayWidth/6+30,displayHeight/2+375);
		this.info2.position(displayWidth/6+30,displayHeight/10-60);
		this.info3.position(displayWidth/6+30,displayHeight/10-40);

		this.one.position(displayWidth/2-185,displayHeight/2+100);
		this.two.position(displayWidth/2-40,displayHeight/2+100);
		this.three.position(displayWidth/2+107,displayHeight/2+100);
		this.four.position(displayWidth/2+245,displayHeight/2+100);
		this.five.position(displayWidth/2+387,displayHeight/2+100);

		this.submit.position(displayWidth/2+360,displayHeight/2+400);
		this.submit.size(100,40);
		this.submit.style('background-color',"#CCFFFF");

		this.submit.mousePressed(()=>{
			this.thanks = createElement('h2',"Thank you for taking the time to complete this survey.");
			this.thanks.position(displayWidth/6+200,displayHeight/2+397);
			this.thanks.style('color',"#0000FF");
	
			Person.name = this.name.value();
			Person.email = this.email.value();
			Person.radio1 = this.radio1.value();
			Person.radio2 = this.radio2.value();
			Person.radio3 = this.radio3.value();
			Person.radio4 = this.radio4.value();
			Person.radio5 = this.radio5.value();
			Person.radio6 = this.radio6.value();
			Person.radio7 = this.radio7.value();
			Person.radio8 = this.radio8.value();
			Person.radio9 = this.radio9.value();
			Person.number = this.number.value();
			Person.number2 = this.number2.value();
			personCount+= 1;
			Person.index = personCount;
			Person.update();
			Person.updateCount(personCount);
		})

		
	}
}
