const exppress = require('express');
const Fuse = require('fuse.js');
const app= exppress();

app.use(exppress.json());
const books = [{
    id:1,
    name:"brijesh satasiya",
    title:"backend developer"    
},
    {
        id:2,
        name:"brijesh agarwal",
        title:"full stack developer" 
    }
];

app.get("/api/books/:id",(req,res,next) => {
    const { id } = req.params;
    console.log("id",id);
    if(id){
        next('route');
    } else {
        res.send(books);
    }
})

app.get("/api/books/:id",(req,res,next) => {
    const { id } = req.params;
    console.log("here id",typeof(id),id);
    if(id){        
        const hd = books.find(item => item.id === Number(id));
        return res.send(hd);
        console.log("lol hefvgsv")
    }
})

app.get("/api/search",(req,res,next) => {
    const { search } = req.query;
    if(search) {
        const options = {
            includeScore: true,
            // Search in `author` and in `tags` array
            keys: ['name', 'title']
          }
          
          const fuse = new Fuse(books, options)
          
          const result = fuse.search(search);
          if(result) {
            res.send(result);
          } else {
            res.send();
          }
    } else {
        res.send(books);
    }
})

app.post("/api/books",(req,res,next) => {
    console.log("req body",req);
    const { name,title } = req.body;
    // console.log("req body",name,title);
    let lastItem = books[books.length -1];
    let id = lastItem.id+1;
    if(name && title){
        books.push({
            id,
            name,
            title
        });
        res.status(200).send(`book added with ${id} and ${name} & ${title}`);
    } else {
        res.status(500).send("bad request");    
    }
})

app.listen("5000",() => {
    console.log("server created");
})