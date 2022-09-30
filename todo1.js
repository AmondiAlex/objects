const todo1 = [
    {
      text: "order food",
      body: "ring road shop",
    },
   {
      text: "attend movie show",
      body: "swan park",
   },
   {
      text: "design website",
      body: "sunset systems",
   },
];
 
//console.log(todo1[1].body)
//console.log(todo1[2].text)

//console.log(todo1[3].body);
//todo1.forEach(function(item){
    //console.log(item.body);
//});


const findTodo1 = function (todo1Data, todo1Text) {
    return todo1Data.find(function(item){
        return item.text === todo1Text;
    });
};
console.log(findTodo1(todo1, "design website"));


 