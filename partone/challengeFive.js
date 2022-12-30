const book={
    title:"titleone",
    author:"authorone"
}

const bookJson=JSON.stringify(book)
const bookData=JSON.parse(bookJson)

console.log(bookJson);
console.log(bookData);