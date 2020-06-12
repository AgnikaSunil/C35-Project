class PersonData{
	constructor(){
		this.index = null;
		this.name = null;
		this.email = null;
		this.radio1 = null;
		this.radio2 = null;
		this.radio3 = null;
		this.radio4 = null;
		this.radio5 = null;
		this.radio6 = null;
		this.radio7 = null;
		this.radio8 = null;
		this.radio9 = null;
		this.number = null;
		this.number2 = null;
	}

	getCount(){
        var personCountRef = database.ref('personCount');
        personCountRef.on("value",(data)=>{
            personCount = data.val();
        });
	}
	
	updateCount(count){
        database.ref('/').update({
            personCount :count
        });
	}
	
	update(){
		var personIndex = "people/person" + this.index;
		database.ref(personIndex).set({
			name : this.name,
			email : this.email,
			radio1 : this.radio1,
			radio2 : this.radio2,
			radio3 : this.radio3,
			radio4 : this.radio4,
			radio5 : this.radio5,
			radio6 : this.radio6,
			radio7 : this.radio7,
			radio8 : this.radio8,
			radio9 : this.radio9,
			number : this.number,
			number2 : this.number2
		});
	}

	reset(){
		this.index = null;
		this.name = null;
		this.email = null;
		this.radio1 = null;
		this.radio2 = null;
		this.radio3 = null;
		this.radio4 = null;
		this.radio5 = null;
		this.radio6 = null;
		this.radio7 = null;
		this.radio8 = null;
		this.radio9 = null;
		this.number = null;
		this.number2 = null;
	}
}
