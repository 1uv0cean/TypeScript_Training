import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import { Book } from "./types.ts"
import { v4 } from 'https://deno.land/std@0.100.0/uuid/mod.ts'

const router = new Router();

let books: Book[] = [
    {
        id: "1",
        title: "Book One",
        author: "One"
    },
    {
        id: "2",
        title: "Book Two",
        author: "Two"
    },
    {
        id: "3",
        title: "Book Three",
        author: "Three"
    },
]

router.get('/',(context) =>{
    context.response.body = "Hi kk";
})
    .get("/books", (context) =>{
        context.response.body = books;
    })
    .post("/book", async (context) =>{
        const body = context.request.body();
        
        //body null check
        if(!context.request.hasBody){
            context.response.status = 400
            context.response.body = "데이터가 없습니다."
        } else {
            //when get information -> create id, create book object with info
            
            const book: Book = await context.request.body().value;
            book.id = v4.generate();
            books.push(book);
            context.response.status = 201;
            context.response.body = books;

        }
    })
    .get("/books/:id", async(context) =>{
        //id of book to find

        const book: Book | undefined = books.find((b) => b.id === context.params.id)
        
        if (book) {
            context.response.body = book
            context.response.status = 200
        } else {
            context.response.body = "책을 찾지 못했습니다."
            context.response.status = 404
        }
    })

    export default router;