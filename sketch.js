var canvas;
var database;
var form;
var Person;
function setup(){
canvas = createCanvas(displayWidth - 500,displayHeight);

database = firebase.database();

form = new Form();
form.display();

Person = new PersonData();
Person.getCount();
}
function draw(){
background("white");

}
