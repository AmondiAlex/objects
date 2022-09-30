// ARRAY --> a collection of items
// To define an array ,define the varible type with a square brackets[]
const notes = ["note1","note2","note3"];
//console.log(notes[1]);
notes[1] = "something else";

notes.forEach(function(item){
console.log(item);
})

notes.forEach(function(item, index){
    console.log(`${index} -- ${item}`);
    })

 let index = notes.findIndex(function(note){
    return note === "note1";
 });
 console.log(index);

 



