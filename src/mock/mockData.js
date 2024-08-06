//import Contact from'../components/Contact/Contact'
//import AboutUs from'../components/AboutUs/AboutUs'

export const categories=[
    'Home',
    'Ciencia Ficción',
    'Fantasía',
    'Terror',
    'Contact',
    'AboutUs'
]

export const items=[
    {
        id:1,
        name:'¿Sueñan los androides con ovejas eléctricas?',
        author:'Philip K. Dick',
        description:'En un futuro post-apocalíptico, los cazadores de androides enfrentan la difusa línea entre humanidad y máquina.',
        price:15000,
        category:['Ciencia Ficción'],
        stock:'',
        image:''
    },
    {
        id:2,
        name:'Neuromante',
        author:'William Gibson',
        description:'Un cibercriminal caído en desgracia recibe una segunda oportunidad para infiltrarse en las matrices más protegidas del ciberespacio en un mundo de alta tecnología y baja vida.',
        price:20000,
        category:['Ciencia Ficción'],
        stock:'',
        image:''
    },
    {
        id:3,
        name:'La estación de la calle Perdido',
        author:'China Miéville',
        description:'Bajo las gigantescas costillas blanqueadas de una bestia antigua y muerta yace la ciudad de Nueva Crobuzon, donde el trato turbio no es extraño para nadie. Pronto ocurrirá una metamorfosis inquietante que impregnaría cada fibra de Nueva Crobuzon y ni siquiera el Embajador del Infierno desafiará el terror maligno que provoca.',
        price:20000,
        category:['Fantasía'],
        stock:'',
        image:''
    },
    {
        id:4,
        name:'American Gods',
        author:'Neil Gaiman',
        description:'En un Estados Unidos donde los antiguos dioses mitológicos coexisten con los nuevos dioses de la tecnología y los medios de comunicación, un exconvicto se ve envuelto en una batalla épica que revela la oscura y terrorífica verdad detrás de la fe y la creencia humanas.',
        price:10000,
        category:['Fantasía'],
        stock:'',
        image:''
    },
    {
        id:5,
        name:'Metro 2033',
        author:'Dmitry Glukhovsky',
        description:'En un Moscú post-apocalíptico, los supervivientes de la humanidad se refugian en los oscuros túneles del metro, enfrentándose a criaturas mutantes y a la locura humana mientras luchan por sobrevivir en un ambiente saturado de terror y desesperación.',
        price:10000,
        category:['Terror'],
        stock:'',
        image:''
    },
    {
        id:6,
        name:'El reino de la noche',
        author:'William Hope Hodgson',
        description:'Un joven del siglo XVII, es transportado a miles de años de nuestro presente, donde el sol ya se ha extinguido y los pocos seres humanos cuerdos que han logrado sobrevivir se han refugiado en una gran pirámide metálica de más de ocho millas de altura y poblada por miles de ciudades.',
        price:15000,
        category:['Terror'],
        stock:'',
        image:''
    }
]

{/* export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>
                prod.id===productId
            ))
        },500)
    })
}

export const getProductsBycategory=(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(product=>
                product.category.includes(categoryId)
            ))
        },500)
    })
} */}