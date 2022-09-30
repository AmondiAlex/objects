const note1 = [
    {
        title: "My next trip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",

    },
    {
        title: "book iam reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "amsterdam center, netherlands",
    },
    {
        title: "fomula1",
        body: "qatar rally",
    },
];

   console.log(note1[4].body);
    note1.forEach(function(item) {
       console.log(item.body);
    });

    const findNote = function (note1Data, noteTitle) {
       return note1Data.find(function (item) {
            return item.title === noteTitle;
        });
    };
    console.log(findNote(note1, "attend book session"));
    
    const findNote2 =function (note1Data, noteTitle) {
        return note1Data.findIndex(function (item) {
            return item.title === noteTitle;
        });
    };
    console.log(findNote2(note1, "attend book session"));   



    const findNotes2 = function (note1Data, query) {
        return note1Data.filter(function (item){
          return item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.body.toLowerCase().includes(query.toLowerCase());
        });
    };
    
    console.log(findNotes2(note1, "ne"));
   

