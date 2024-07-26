export const categories=[
    'Ciencia Ficción',
    'Fantasía',
    'Terror'
]

export const products=[
    {
        id:1,
        name:'La invención de Morel',
        author:'Adolfo Bioy Casares',
        description:'Una novela que mezcla ciencia ficción y realismo mágico, explorando temas de inmortalidad y percepción de la realidad.',
        price:15000,
        category:['Ciencia Ficción'],
        stock:'',
        image:'',
    },
    {
        id:2,
        name:'El Año del Desierto',
        author:'Pedro Mairal',
        description:'Esta novela es una metáfora de la eterna crisis argentina potenciada hasta la destrucción total, hasta que sólo queden el desierto y una voz para contar la historia. El año del desierto vuelve a confirmar a Pedro Mairal como uno de los mejores escritores argentinos de su generación.',
        price:20000,
        category:['Ciencia Ficción'],
        stock:'',
        image:'',
    },
    {
        id:3,
        name:'Aniquilación',
        author:'Jeff VanderMeer',
        description:'Un equipo de científicas entra en el Área X, una zona misteriosa y prohibida donde las leyes de la naturaleza se desintegran, enfrentándose a terroríficas mutaciones y fuerzas inexplicables.',
        price:10000,
        category:['Ciencia Ficción'],
        stock:'',
        image:'',
    },
    {
        id:4,
        name:'El almuerzo desnudo',
        author:'Philip K. Dick',
        description:'En un futuro post-apocalíptico, los cazadores de androides enfrentan la difusa línea entre humanidad y máquina.',
        price:15000,
        category:['Ciencia Ficción'],
        stock:'',
        image:'',
    },
    {
        id:5,
        name:'Neuromante',
        author:'William Gibson',
        description:'Un cibercriminal caído en desgracia recibe una segunda oportunidad para infiltrarse en las matrices más protegidas del ciberespacio en un mundo de alta tecnología y baja vida.',
        price:20000,
        category:['Ciencia Ficción'],
        stock:'',
        image:'',
    },
    {
        id:6,
        name:'Los sorias',
        author:'Alberto Laiseca',
        description:'publicada en 1998. Es la novela más larga del autor, y ha sido considerada por la crítica, lectores y el propio Laiseca como su obra cumbre',
        price:10000,
        category:['Fantasía'],
        stock:'',
        image:'',
    },
    {
        id:7,
        name:'Cien años de soledad',
        author:'Gabriel García Márquez',
        description:'Narra a historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo. La novela fusiona lo mágico y lo real para explorar temas de soledad, destino y la influencia del tiempo en la historia y la memoria.',
        price:15000,
        category:['Fantasía'],
        stock:'',
        image:'',
    },
    {
        id:8,
        name:'La estación de la calle Perdido',
        author:'China Miéville',
        description:'Bajo las gigantescas costillas blanqueadas de una bestia antigua y muerta yace la ciudad de Nueva Crobuzon, donde el trato turbio no es extraño para nadie. Pronto ocurrirá una metamorfosis inquietante que impregnaría cada fibra de Nueva Crobuzon y ni siquiera el Embajador del Infierno desafiará el terror maligno que provoca.',
        price:20000,
        category:['Fantasía'],
        stock:'',
        image:'',
    },
    {
        id:9,
        name:'American Gods',
        author:'Neil Gaiman',
        description:'En un Estados Unidos donde los antiguos dioses mitológicos coexisten con los nuevos dioses de la tecnología y los medios de comunicación, un exconvicto se ve envuelto en una batalla épica que revela la oscura y terrorífica verdad detrás de la fe y la creencia humanas.',
        price:10000,
        category:['Fantasía'],
        stock:'',
        image:'',
    },
    {
        id:10,
        name:'Elric de Melniboné',
        author:'Michael Moorcock',
        description:'La historia épica de Elric, un emperador albino que posee una espada mágica y está destinado a enfrentarse a fuerzas oscuras y a su propio destino en un mundo de fantasia lleno de intrigas y magia.',
        price:15000,
        category:['Fantasía'],
        stock:'',
        image:'',
    },
    {
        id:11,
        name:'Blindsight',
        author:'Peter Watts',
        description:'En un futuro cercano, una expedición espacial se enfrenta a un encuentro con inteligencias extraterrestres que desafían toda comprensión humana, explorando los límites del conocimiento y el horror existencial.',
        price:20000,
        category:['Terror'],
        stock:'',
        image:'',
    },
    {
        id:12,
        name:'Metro 2033',
        author:'Dmitry Glukhovsky',
        description:'En un Moscú post-apocalíptico, los supervivientes de la humanidad se refugian en los oscuros túneles del metro, enfrentándose a criaturas mutantes y a la locura humana mientras luchan por sobrevivir en un ambiente saturado de terror y desesperación.',
        price:10000,
        category:['Terror'],
        stock:'',
        image:'',
    },
    {
        id:13,
        name:'El reino de la noche',
        author:'William Hope Hodgson',
        description:'Un joven del siglo XVII, es transportado a miles de años de nuestro presente, donde el sol ya se ha extinguido y los pocos seres humanos cuerdos que han logrado sobrevivir se han refugiado en una gran pirámide metálica de más de ocho millas de altura y poblada por miles de ciudades.',
        price:15000,
        category:['Terror'],
        stock:'',
        image:'',
    },
    {
        id:14,
        name:'El ciclo de Cthulhu',
        author:'H.P. Lovecraft',
        description:'Las obras de Lovecraft, como "La llamada de Cthulhu", exploran un universo donde antiguos y poderosos seres cósmicos acechan en las sombras, desafiando la cordura humana y mezclando terror cósmico con elementos de mitología y fantasia oscura.',
        price:20000,
        category:['Terror'],
        stock:'',
        image:'',
    },
    {
        id:15,
        name:'It',
        author:'Stephen King',
        description:'En el tranquilo pueblo de Derry, Maine, un grupo de amigos se enfrenta a una entidad malévola que adopta la forma de sus peores miedos y pesadillas, regresando cíclicamente para sembrar el terror entre los habitantes, en una lucha a vida o muerte contra el mal absoluto.',
        price:10000,
        category:['Terror'],
        stock:'',
        image:'',
    },
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
            resolve(products.find(prod=>prod.id===productId))
        },500)
    })
}

export const getProductsByCategory=(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(product=>product.category.includes(categoryId)))
        },500)
    })
} */}