db.products.insertMany({
    _id:2,
    name:"Pencil",
    price:50,
    stock:42,
    reviews:[
        {
            author:"jenny",
            rating:5,
            review:"Cool Pencil !!"
        }
        {
            author:"john",
            rating:5,
            review:"Easy To Use"
        }
    ]
})