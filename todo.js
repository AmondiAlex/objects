const todo =["order water" ,"clean compound","buy food"];



    todo.forEach(function(todo, index){
        const num=index+1;
        console.log(`${num} -- ${todo}`);
     });

     let index = todo.findIndex(function(todo){
        return todo === "order water";
     });
     console.log(index);
    

    