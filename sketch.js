var canvas;
var personCount;
var database;
var form;
var Person;
function setup(){
canvas = createCanvas(950,900);

database = firebase.database();

form = new Form();
form.display();

Person = new PersonData();
Person.getCount();
}
function draw(){
background("white");

}
