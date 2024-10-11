function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
}

function changeTypeList(name, x){
    //var x = document.getElementById(buttonName)
    //console.log(x)
    if (x.style.opacity == 0.5) {
        x.style.opacity = 1;
        types = removeItemAll(types, name)
        types.push(name)
        
      } else {
        types = removeItemAll(types, name)
        x.style.opacity = 0.5;
      }
      console.log("Type list:", types)
}

function changeRootList(name, x){
    //var x = document.getElementById(buttonName)
    //console.log(x)
    if (x.style.opacity == 0.5) {
        x.style.opacity = 1;
        roots = removeItemAll(roots, name)
        roots.push(name)
        //console.log(roots)
        
      } else {
        roots = removeItemAll(roots, name)
        x.style.opacity = 0.5;
        //console.log(roots)
      }
}



// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Time between chords
var switchTime = 800 //ms

// Define the root notes
var roots = ["C", "C♯", "D♭", "D", "D♯", "E♭", "E", "F♭", "E♯", "F", "F♯", "G♭", "G", "G♯", "A♭", "A", "A♯", "B♭", "B", "B♯"]
// Define the type of chords
var types = ["", "m", "⁷", "m⁷", "mᵐᵃʲ ⁷", "6"]

console.log(roots)

// Make object for display box
const currentChordDisplay = document.getElementById("currentChordText")
const nextChordDisplay = document.getElementById("nextChordText")
const currentTime = document.getElementById("currentTime")
var currentChord = "C"
var nextChord = "C"

async function updateDisplay() {
    var time = 1

    // Loop iterating over
    while(true){
    

        if ((time % 4) == 1) {
            // Update chord
            currentChord = nextChord
            // Get next chord
            var root = roots[Math.floor(Math.random()*roots.length)]
            var type = types[Math.floor(Math.random()*types.length)]
            nextChord = root + " " + type


            //console.log("test", a)
            currentChordDisplay.innerHTML = currentChord
            nextChordDisplay.innerHTML = nextChord
            time = 1
        }

        currentTime.innerHTML = time
        time += 1
        await sleep(switchTime)
    }

}


updateDisplay()
var mylist = [1, 2, 3, 4]


function test() {
    mylist = [1, 2, 3, 4, 5, 6]
}


test()
console.log(mylist)
console.log