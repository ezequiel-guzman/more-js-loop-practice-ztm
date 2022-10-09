var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study js",
  "eat healthy",
];

var todosLength = todos.length;

for (var i=0; i < todosLength; i++) {
  todos.pop(i);
};

//  While Loops 

var counter = 0;

// counting up with (a while loop)
while (counter < 10){
  console.log(counter);
  counter++;
}

// counting down with (a while loop)

var counterTwo = 20;

while (counterTwo > 0) {
  console.log(counterTwo);
  counterTwo--;
}

//  for loop practice

var myCounter = [
  1,
  2,
  3,
]

var myCounterLength = myCounter.length

for ( i=0; i < myCounterLength; i++){
  console.log("this is my counter", myCounter[i]);
}

// practicing while loops

var anotherCounter = 20;

var i = 0;

while (i < anotherCounter){
  console.log("this is another counter", i);
  i++;
}

var cars = 100;

while (cars > 0) {
  console.log("i am getting rid of my cars", cars);
  cars--;
}



