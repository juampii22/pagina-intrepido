const products =[
    {id:1 , name:"Casco Hawk RS1" , price:16800 , stock:10 , category:"cascos", description:"El casco FF320 de la marca LS2 es un casco liviano y seguro, ideal para ciudad y el dia a dia." ,img:"https://http2.mlstatic.com/D_NQ_NP_845628-MLA32941432057_112019-O.webp" },
    {id:2 , name:"Casco LS2 Rookie 352" , price:40000 , stock:15 , category:"cascos", description:"El casco FF320 de la marca LS2 es un casco liviano y seguro, ideal para ciudad y el dia a dia." , img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/352-matt-black-11-03e4c506c877b87d5a15851006817531-640-0.webp" },
    {id:3 , name:"Casco LS2 FF320" , price:70000 , stock:6 , category:"cascos" , description:"El casco FF320 de la marca LS2 es un casco liviano y seguro, ideal para ciudad y el dia a dia." , img:"https://http2.mlstatic.com/D_NQ_NP_803437-MLA47585308373_092021-O.webp" },
    {id:4, name: "Guantes Hawk Moto", price: 13000, stock: 7, category: "guantes", description:"Cuenta con protectores de nudillos y falanges que refuerzan las zonas mas expuestas antes un accidente.", img:"https://http2.mlstatic.com/D_NQ_NP_634210-MLA49658042773_042022-O.webp" },
    {id:5 , name: "Guantes Pro Biker", price: 4000, stock:5 , category:"guantes" , description:"Brinda mejor agarre Mayor protección Revestimiento 65% Poliéster y 35% Espuma." , img:"https://http2.mlstatic.com/D_NQ_NP_902894-MLA54552690917_032023-O.webp" },
    {id:6 , name:"Campera moto Gp23" , price:49000, stock:4 , category:"camperas" , description:"Campera GP23 Punto Extremo de cordura impermeable y resistente con abrigo desmontable y protecciones." , img:"https://http2.mlstatic.com/D_NQ_NP_914856-MLA53727325279_022023-O.webp" },
    {id:7 , name:"Campera Moto Four" , price:100000, stock:6 , category:"camperas" , description:"Campera de cordura corta, ideal para ciudad y viajes." , img:"https://http2.mlstatic.com/D_NQ_NP_693236-MLA31352922472_072019-O.webp" },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory =(categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}