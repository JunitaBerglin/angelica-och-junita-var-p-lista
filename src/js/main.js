const myUl = document.getElementById("myUl");

class Confused {
  // klass som sätter egenskaper på våra objekt
  constructor(student, helped) {
    this.student = student;
    this.helped = false;
  }
}

let helpList = []; //delklareras en ny lista som är tom
helpList.push(new Confused("Markus")); // nya listobjekt pushas in i listan
helpList.push(new Confused("Sara"));
helpList.push(new Confused("Pelle"));
helpList.push(new Confused("Kurt"));

/*for-loop för att skapa våra list-items */

function createLi() {
  myUl.innerHTML = ""; // rensar listan på tidigare loop

  for (let i = 0; i < helpList.length; i++) {
    console.log(helpList[i]);
  }
}
