const express=require('express')
const path=require('path')  //get directory path
const app=express()
const PORT = 3000;


app.use(express.json())

let books=[
    {id: 1, title: "The Alchenist", author: "Paulo Coelho"},
    {id: 2, title: "Harry Potter", author: "J K Rowling"}
]

app.get('/api/books',(req,res)=>{
    res.json(books)
})

//1.GET a single book by id
app.get('/api/books/:id', (req,res)=>{
    const bookId = parseInt(req.params.id);
    const book=books.find(b=> b.id === bookID)

    if(!book){
        return res.status(404).json({message: "Book not found"})
    }
    res.json(book)
})

//2.POST (add) a new book
app.post('/api/books',(req,res)=>{
    const {title, author} = req.body
    //validate request body
    if(!title || !author){
        return res.status(400).json({message: "Title and Author are required"})
    }

    const newBook={
        id: books.length+1,
        title,
        author
    };

    books.push(newBook)
    res.status(201).json(newBook)
})
//PUT update an existing book by ID
app.put('/api/books/:id',(req,res)=>{
    const bookId = parseInt(req.params.id)
    const {title, author} = req.body
    const book = books.find(b =>b.id === bookId)

    if(!book){
        return res.status(400).json({message: "Book not found"})
    }

    //update book properties
    if(title) book.title = title
    if(author) book.author = author

    res.json(book)
})

//Delete a book
app.delete('/api/books/:id',(req,res)=>{
    const bookId =parseInt(req.params.id)
    const bookIndex = books.findIndex(b => b.id === bookId)

    if(bookIndex === -1){
        return res.status(404).json({message : "Book not found"})
    }

    books.splice(bookIndex, 1)
    res.status(204).end()
})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost: ${PORT}`);
});