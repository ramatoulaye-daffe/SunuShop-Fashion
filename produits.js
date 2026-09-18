const products = [

    {
        id: 1,
        name: "T-shirt noir",
        price: 5000,
        category: "vetements",
        image: "images/tshirt-nike.jpg",
        description: "T-shirt noir en coton doux et respirant, idéal pour une tenue décontractée au quotidien. Sa coupe confortable s'associe facilement avec un jean ou un pantalon."
    },

    {
        id: 2,
        name: "Chaussures sport",
        price: 15000,
        category: "chaussures",
        image: "images/shoes.jpg",
        description: "Chaussures de sport légères et confortables, conçues pour accompagner vos activités quotidiennes. Leur design moderne convient aussi bien au sport qu'aux sorties décontractées."
    },

    {
        id: 3,
        name: "Sac à main",
        price: 10000,
        category: "accessoires",
        image: "images/sac6.jpg",
        description: "Sac à main élégant et pratique offrant suffisamment d'espace pour transporter vos essentiels. Un accessoire facile à associer avec différentes tenues."
    },

    {
        id: 4,
        name: "Air Force",
        price: 12000,
        category: "chaussures",
        image: "images/shoes2.jpg",
        description: "Baskets inspirées du style Air Force, avec un design moderne et polyvalent. Elles apportent une touche tendance à vos tenues décontractées."
    },

    {
        id: 5,
        name: "Jean bleu",
        price: 8500,
        category: "vetements",
        image: "images/jean.jpg",
        description: "Jean bleu confortable avec une coupe facile à porter au quotidien. Il s'accorde parfaitement avec un t-shirt, une chemise ou un haut plus élégant."
    },

    {
        id: 6,
        name: "Robe élégante",
        price: 12500,
        category: "vetements",
        image: "images/robe8.png",
        description: "Robe élégante à la coupe féminine, idéale pour les sorties, les rendez-vous ou les occasions spéciales. Son style permet de créer facilement une tenue chic."
    },

    {
        id: 7,
        name: "Pull-over unisexe",
        price: 10000,
        category: "vetements",
        image: "images/pull-noir.jpg",
        description: "Pull-over unisexe doux et confortable, parfait pour les journées fraîches. Son style sobre convient aussi bien aux hommes qu'aux femmes."
    },

    {
        id: 8,
        name: "Sac à main",
        price: 11000,
        category: "accessoires",
        image: "images/sac4.jpg",
        description: "Sac à main tendance au design élégant, parfait pour compléter une tenue quotidienne. Son format pratique permet de garder vos essentiels à portée de main."
    },

    {
        id: 9,
        name: "Robe manche unique",
        price: 13500,
        category: "vetements",
        image: "images/robe7.png",
        description: "Robe à manche unique au style original et élégant. Une pièce idéale pour celles qui souhaitent apporter une touche moderne et féminine à leur look."
    },

    {
        id: 10,
        name: "Sac à main",
        price: 9500,
        category: "accessoires",
        image: "images/sac1.jpg",
        description: "Sac à main compact et élégant, adapté aux sorties quotidiennes. Son design polyvalent permet de l'associer facilement à différents styles vestimentaires."
    },

    {
        id: 11,
        name: "Haut pour femme",
        price: 8500,
        category: "vetements",
        image: "images/haut5.jpg",
        description: "Haut pour femme au style élégant et moderne. Facile à porter avec un jean, une jupe ou un pantalon pour créer une tenue simple et soignée."
    },

    {
        id: 12,
        name: "Robe 3/4",
        price: 12000,
        category: "vetements",
        image: "images/robe0.jpg",
        description: "Robe 3/4 confortable et élégante, parfaite pour les sorties quotidiennes comme pour les occasions particulières. Sa coupe offre un style féminin et moderne."
    },

    {
        id: 13,
        name: "Basket unisexe",
        price: 10000,
        category: "chaussures",
        image: "images/shoes4.jpg",
        description: "Basket unisexe confortable avec un style décontracté et tendance. Elle convient parfaitement aux déplacements quotidiens et aux sorties entre amis."
    },

    {
        id: 14,
        name: "Gilet unisexe",
        price: 9000,
        category: "vetements",
        image: "images/gillet2.jpg",
        description: "Gilet unisexe confortable et facile à associer avec différentes tenues. Une pièce pratique pour compléter un look décontracté ou élégant."
    },

    {
        id: 15,
        name: "Lacoste homme",
        price: 10000,
        category: "vetements",
        image: "images/lasoste1.jpg",
        description: "Polo pour homme au style classique et élégant. Sa coupe polyvalente permet de le porter aussi bien avec un jean qu'avec un pantalon habillé."
    },

    {
        id: 16,
        name: "Talon femme",
        price: 15000,
        category: "chaussures",
        image: "images/tallons5.jpg",
        description: "Chaussures à talons pour femme au design élégant, idéales pour les cérémonies, sorties et occasions spéciales. Elles apportent une touche sophistiquée à votre tenue."
    },

    {
        id: 17,
        name: "T-shirt femme",
        price: 7500,
        category: "vetements",
        image: "images/tshirt4.jpg",
        description: "T-shirt pour femme confortable et facile à porter. Son style moderne permet de créer aussi bien une tenue décontractée qu'un look casual chic."
    },

    {
        id: 18,
        name: "Mocassin homme",
        price: 14000,
        category: "chaussures",
        image: "images/shoes5.jpg",
        description: "Mocassins pour homme au style élégant et intemporel. Ils sont adaptés aux sorties, aux événements et aux tenues professionnelles ou semi-formelles."
    },

    {
        id: 19,
        name: "Cargo",
        price: 9500,
        category: "vetements",
        image: "images/jean-noir.jpg",
        description: "Pantalon cargo confortable avec un style moderne et décontracté. Ses poches pratiques et sa coupe polyvalente en font une pièce idéale au quotidien."
    },

    {
        id: 20,
        name: "Jordan",
        price: 18000,
        category: "chaussures",
        image: "images/shoes6.jpg",
        description: "Baskets au style sportif et tendance, inspirées de l'univers Jordan. Elles offrent un look dynamique et s'accordent facilement avec des tenues streetwear."
    },

    {
        id: 21,
        name: "Chemisier",
        price: 9000,
        category: "vetements",
        image: "images/haut3.jpg",
        description: "Chemisier élégant et confortable, idéal pour le bureau, les sorties ou les occasions particulières. Il peut être associé à un pantalon, un jean ou une jupe."
    }

];