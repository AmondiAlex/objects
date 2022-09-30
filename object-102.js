// using functions in objects
let myBook1= {
    title:"Harry Porter",
    author:"JK Rowling",
    pagecount:600,
};

let myBook2 = {
    title:"Safe Harbour",
    author:"Danielle Steel",
    pagecount:700,
};

let getSummary = function (book) {
    return {
        summary:`${book.title} by ${book.author}`,
    };
};
let bookSummary = getSummary(myBook1);
console.log(bookSummary.summary);

let bookSummary2 = getSummary(myBook2);
console.log(bookSummary2.summary);