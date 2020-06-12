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
		this.name.position(334,145);
		this.name.size(200,15);
		this.email.position(334,173);
		this.email.size(200,15);
		this.nameText.position(270,122);
		this.emailText.position(270,152);
		this.text1.position(264,80);

		this.firstQ.position(270,190);
		this.radio1.position(265,250);
		this.radio2.position(265,280);
		this.radio3.position(265,310);
		this.radio4.position(265,340);

		this.secondQ.position(270,360);
		this.sub1.position(270,400);
		this.number.position(490,420);
		this.sub2.position(270,430);
		this.number2.position(490,450);

		this.thirdQ.position(270,470);		
		this.thirdQB.position(270,500);	
		this.public.position(270,580);
		this.radio5.position(530,600);
		this.radio5.style('width','600px');
		this.radio5.style('color',"white");

		this.government.position(270,620);
		this.radio6.position(530,640);
		this.radio6.style('width','600px');
		this.radio6.style('color',"white");

		this.industry.position(270,660);
		this.radio7.position(530,680);
		this.radio7.style('width','600px');
		this.radio7.style('color',"white");

		this.nature.position(270,700);
		this.radio8.position(530,720);
		this.radio8.style('width','600px');
		this.radio8.style('color',"white");

		this.fifthQ.position(270,740);
		this.radio9.position(270,800);
		this.radio9.style('width','50px');

		this.title.position(570,-20);

		this.info.position(270,830);
		this.info2.position(270,25);
		this.info3.position(270,45);

		this.one.position(536,550);
		this.two.position(680,550);
		this.three.position(826,550);
		this.four.position(967,550);
		this.five.position(1108,550);

		this.submit.position(1000,840);
		this.submit.size(100,40);
		this.submit.style('background-color',"#CCFFFF");

		this.submit.mousePressed(()=>{
			this.thanks = createElement('h2',"Thank you for taking the time to complete this survey.");
			this.thanks.position(450,855);
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
