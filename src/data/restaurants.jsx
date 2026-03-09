import reverter from '../assets/restaurantsPictures/reverter.webp'
import barbacoaCanDieta from '../assets/restaurantsPictures/barbacoa-can-dieta.webp'
import calCoix from '../assets/restaurantsPictures/cal-coix.webp'
import calNano from '../assets/restaurantsPictures/cal-nano.webp'
import canCasellas from '../assets/restaurantsPictures/can-casellas.webp'
import carboNegre from '../assets/restaurantsPictures/carbo-negre.webp'
import casaOms from '../assets/restaurantsPictures/casa-oms.webp'
import elReno from '../assets/restaurantsPictures/el-reno.webp'
import koi from '../assets/restaurantsPictures/koi.webp'
import laBella from '../assets/restaurantsPictures/la-bella.webp'
import masCarbo from '../assets/restaurantsPictures/mas-carbo.webp'
import masiaGibert from '../assets/restaurantsPictures/masia-gibert.webp'
import missKorea from '../assets/restaurantsPictures/miss-korea.webp'
import puraBrasa from '../assets/restaurantsPictures/pura-brasa.webp'


export const restaurants = [
    {
        id: "reverter",
        name: "Reverter 2",            
        image: reverter,
        description: {
            es: "El restaurante Reverter 2, en Palafolls, es un lugar popular para disfrutar de la cocina mediterránea y platos a la brasa en un ambiente informal y acogedor. Es conocido por sus raciones generosas, carnes a la barbacoa y menús variados, ideales para comidas en familia o con amigos. También dispone de terraza y servicio rápido. Se encuentra a unos 10 minutos en coche.",
            en: "The Reverter 2 restaurant in Palafolls is a popular place to enjoy Mediterranean cuisine and grilled dishes in a relaxed and welcoming atmosphere. It is known for its generous portions, barbecue meats, and varied menus, ideal for meals with family or friends. It also has a terrace and fast service. It is about a 10-minute drive away.",
            fr: "Le restaurant Reverter 2 à Palafolls est un lieu populaire pour déguster une cuisine méditerranéenne et des plats grillés dans une ambiance conviviale et détendue. Il est connu pour ses portions généreuses, ses viandes au barbecue et ses menus variés, idéals pour les repas en famille ou entre amis. Terrasse et service rapide. Il se trouve à environ 10 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: true,
        lunchAndDinner: false,        
        chinese: false,
        mediterranean: true,
        localFood: true,        
        howNear: "10-15 min",
        rating: "4,4/5",
        source: "https://share.google/m8NTo722j9OcbUupG"
    },    
    {
        id: "pura brasa",
        name: "Pura Brasa Pineda de Mar",            
        image: puraBrasa,
        description: {
            es: "El restaurante Pura Brasa en Pineda de Mar es un lugar moderno y acogedor especializado en carnes y platos a la parrilla. Ofrece una amplia variedad de carnes a la brasa, hamburguesas, tapas y platos mediterráneos, preparados con ingredientes de calidad. Es ideal para disfrutar de una comida con amigos o en familia en un ambiente agradable. Se encuentra a unos 13 minutos en coche.",
            en: "The Pura Brasa restaurant in Pineda de Mar is a modern and welcoming place specializing in grilled meats and barbecue dishes. It offers a wide variety of grilled meats, burgers, tapas, and Mediterranean dishes prepared with quality ingredients. It is ideal for enjoying a meal with friends or family in a pleasant atmosphere. It is about a 13-minute drive away.",
            fr: "Le restaurant Pura Brasa à Pineda de Mar est un établissement moderne et convivial spécialisé dans les viandes et plats grillés. Il propose une grande variété de viandes à la braise, hamburgers, tapas et plats méditerranéens préparés avec des ingrédients de qualité. C’est un endroit idéal pour partager un repas entre amis ou en famille dans une ambiance agréable. Il se trouve à environ 13 minutes en voiture."
        },
        price: "20-70 €",        
        onlyLunch: false,
        lunchAndDinner: true,        
        chinese: false,
        mediterranean: true,
        localFood: false,        
        howNear: "10-15 min",
        rating: "4,4/5",
        source: "https://share.google/TsHqH7l9QdSmoHj5j"
    },    
    {
        id: "casa oms",
        name: "Casa Oms Restaurant",            
        image: casaOms,
        description: {
            es: "El Casa Oms Restaurant es un restaurante acogedor donde se puede disfrutar de cocina mediterránea y catalana elaborada con productos frescos y de calidad. Ofrece una carta variada con carnes, pescados y platos tradicionales, en un ambiente tranquilo ideal para comidas en familia o con amigos. Destaca por su trato cercano y su agradable terraza. Se encuentra a unos 12 minutos en coche.",
            en: "Casa Oms Restaurant is a cozy place where you can enjoy Mediterranean and Catalan cuisine prepared with fresh, high-quality ingredients. It offers a varied menu with meats, fish, and traditional dishes in a calm atmosphere, ideal for meals with family or friends. It stands out for its friendly service and pleasant terrace. It is about a 12-minute drive away.",
            fr: "Le Casa Oms Restaurant est un restaurant chaleureux où l’on peut déguster une cuisine méditerranéenne et catalane préparée avec des produits frais et de qualité. Il propose une carte variée avec viandes, poissons et plats traditionnels, dans une ambiance calme idéale pour les repas en famille ou entre amis. Il se distingue par son accueil chaleureux et sa terrasse agréable. Il se trouve à environ 12 minutes en voiture."
        },
        price: "30-40 €",        
        onlyLunch: true,
        lunchAndDinner: true,        
        chinese: false,
        mediterranean: true,
        localFood: true,        
        howNear: "10-15 min",
        rating: "4,5/5",
        source: "https://share.google/PmsANTu59LCVfEpxH"
    },    
    {
        id: "masia gibert",
        name: "Masia Gibert",            
        image: masiaGibert,
        description: {
            es: "El restaurante Masia Gibert, en Palafolls, es una acogedora masía catalana donde se puede disfrutar de cocina tradicional y platos a la brasa en un ambiente rústico y familiar. Ofrece carnes a la parrilla, especialidades locales y raciones generosas, ideales para comidas tranquilas con amigos o en familia. Destaca por su entorno agradable y su trato cercano. Se encuentra a unos 10 minutos en coche.",
            en: "Masia Gibert restaurant in Palafolls is a cozy Catalan farmhouse restaurant where you can enjoy traditional cuisine and grilled dishes in a rustic and family-friendly atmosphere. It offers grilled meats, local specialties, and generous portions, ideal for relaxed meals with friends or family. It stands out for its pleasant setting and friendly service. It is about a 10-minute drive away.",
            fr: "Le restaurant Masia Gibert à Palafolls est une chaleureuse masia catalane où l’on peut déguster une cuisine traditionnelle et des plats grillés dans une ambiance rustique et familiale. Il propose des viandes à la braise, des spécialités locales et des portions généreuses, idéales pour des repas tranquilles entre amis ou en famille. Il se distingue par son cadre agréable et son accueil chaleureux. Il se trouve à environ 10 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: true,
        lunchAndDinner: false,        
        chinese: false,
        mediterranean: false,
        localFood: true,        
        howNear: "10-15 min",
        rating: "4,0/5",
        source: "https://share.google/VIP9TzerAQ8M5ekar"
    },    
    {
        id: "miss korea",
        name: "Restaurante buffet Miss Korea Santa Susanna",            
        image: missKorea,
        description: {
            es: "El Restaurante Buffet Miss Korea en Santa Susanna es un restaurante tipo buffet donde puedes disfrutar de una gran variedad de platos asiáticos. Ofrece sushi, comida coreana, china y japonesa, además de platos preparados al momento. Es una opción ideal para probar diferentes sabores en un ambiente informal y familiar. Se encuentra a unos 13 minutos en coche.",
            en: "Miss Korea Buffet Restaurant in Santa Susanna is a buffet-style restaurant where you can enjoy a wide variety of Asian dishes. It offers sushi, Korean, Chinese, and Japanese food, as well as dishes prepared on the spot. It is an ideal place to try different flavors in a relaxed, family-friendly atmosphere. It is about a 13-minute drive away.",
            fr: "Le restaurant buffet Miss Korea à Santa Susanna est un restaurant de type buffet où l’on peut profiter d’un large choix de plats asiatiques. Il propose des sushis, de la cuisine coréenne, chinoise et japonaise, ainsi que des plats préparés sur place. C’est une excellente option pour découvrir différentes saveurs dans une ambiance détendue et familiale. Il se trouve à environ 13 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: false,
        lunchAndDinner: true,        
        chinese: true,
        mediterranean: false,
        localFood: false,        
        howNear: "10-15 min",
        rating: "3,6/5",
        source: "https://share.google/AnxNdFRqY8EtFTJIQ"
    },    
    {
        id: "el reno",
        name: "Restaurant El Reno",            
        image: elReno,
        description: {
            es: "El Restaurant El Reno en Lloret de Mar es un lugar popular donde disfrutar de cocina mediterránea y platos a la brasa en un ambiente acogedor. Su carta incluye carnes, pescados, tapas y menús variados, ideales para comidas con familia o amigos. Destaca por su servicio amable y su ambiente relajado. Se encuentra a unos 22 minutos en coche.",
            en: "Restaurant El Reno in Lloret de Mar is a popular place to enjoy Mediterranean cuisine and grilled dishes in a cozy atmosphere. Its menu includes meats, fish, tapas, and varied menus, ideal for meals with family or friends. It stands out for its friendly service and relaxed ambiance. It is about a 22-minute drive away.",
            fr: "Le Restaurant El Reno à Lloret de Mar est un lieu populaire pour déguster une cuisine méditerranéenne et des plats grillés dans une ambiance conviviale. La carte propose viandes, poissons, tapas et menus variés, idéals pour des repas en famille ou entre amis. Il se distingue par son service chaleureux et son atmosphère détendue. Il se trouve à environ 22 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: false,
        lunchAndDinner: true,        
        chinese: false,
        mediterranean: true,
        localFood: false,        
        howNear: "20-25 min",
        rating: "4,1/5",
        source: "https://share.google/uKbCjOxWV0gZWiEid"
    },    
    {
        id: "koi",
        name: "Koi Asian Restaurant",            
        image: koi,
        description: {
            es: "El Koi Asian Restaurant es un restaurante moderno donde se puede disfrutar de una variada cocina asiática en un ambiente elegante y relajado. Su carta incluye sushi, platos japoneses y otras especialidades asiáticas preparadas con ingredientes frescos. Es un lugar ideal para una cena tranquila o para compartir diferentes sabores con amigos o familia. Se encuentra a unos 17 minutos en coche.",
            en: "Koi Asian Restaurant is a modern restaurant where you can enjoy a variety of Asian cuisine in an elegant and relaxed atmosphere. The menu includes sushi, Japanese dishes, and other Asian specialties prepared with fresh ingredients. It is an ideal place for a quiet dinner or to share different flavors with friends or family. It is about a 17-minute drive away.",
            fr: "Le Koi Asian Restaurant est un restaurant moderne où l’on peut déguster une cuisine asiatique variée dans une ambiance élégante et détendue. La carte propose des sushis, des plats japonais et d’autres spécialités asiatiques préparées avec des ingrédients frais. C’est un endroit idéal pour un dîner tranquille ou pour partager différentes saveurs entre amis ou en famille. Il se trouve à environ 17 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: false,
        lunchAndDinner: true,        
        chinese: true,
        mediterranean: false,
        localFood: false,        
        howNear: "15-20 min",
        rating: "4,2/5",
        source: "https://share.google/FujBJorNH1XjjaZuf"
    },    
    {
        id: "can casellas",
        name: "Can Casellas",            
        image: canCasellas,
        description: {
            es: "El Restaurant Can Casellas, en Tordera, es un restaurante tradicional donde se puede disfrutar de cocina catalana y mediterránea en un ambiente tranquilo y acogedor. Ofrece una carta variada con carnes a la brasa, platos caseros y productos de calidad. Es un lugar ideal para comidas en familia o con amigos. Se encuentra a unos 16 minutos en coche.",
            en: "Restaurant Can Casellas in Tordera is a traditional restaurant where you can enjoy Catalan and Mediterranean cuisine in a calm and welcoming atmosphere. It offers a varied menu with grilled meats, homemade dishes, and quality ingredients. It is an ideal place for meals with family or friends. It is about a 16-minute drive away.",
            fr: "Le Restaurant Can Casellas à Tordera est un restaurant traditionnel où l’on peut déguster une cuisine catalane et méditerranéenne dans une ambiance calme et conviviale. Il propose une carte variée avec des viandes grillées, des plats faits maison et des produits de qualité. C’est un endroit idéal pour des repas en famille ou entre amis. Il se trouve à environ 16 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: true,
        lunchAndDinner: true,        
        chinese: false,
        mediterranean: true,
        localFood: true,        
        howNear: "15-20 min",
        rating: "4,2/5",
        source: "https://share.google/0pRWUKXdyFeHqCEIA"
    },    
    {
        id: "mas carbo",
        name: "Mas Carbó",            
        image: masCarbo,
        description: {
            es: "El Restaurant Mas Carbó, en Palafolls, es una masía catalana con mucho encanto donde se puede disfrutar de cocina tradicional y platos a la brasa en un entorno tranquilo y natural. Su carta incluye carnes a la parrilla, especialidades locales y platos caseros preparados con ingredientes de calidad. Es ideal para comidas en familia o con amigos. Se encuentra a unos 12 minutos en coche.",
            en: "Restaurant Mas Carbó in Palafolls is a charming Catalan farmhouse restaurant where you can enjoy traditional cuisine and grilled dishes in a peaceful, natural setting. The menu includes grilled meats, local specialties, and homemade dishes prepared with quality ingredients. It is an ideal place for meals with family or friends. It is about a 12-minute drive away.",
            fr: "Le Restaurant Mas Carbó à Palafolls est une charmante masia catalane où l’on peut déguster une cuisine traditionnelle et des plats grillés dans un cadre calme et naturel. La carte propose des viandes à la braise, des spécialités locales et des plats faits maison préparés avec des ingrédients de qualité. C’est un endroit idéal pour des repas en famille ou entre amis. Il se trouve à environ 12 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: true,
        lunchAndDinner: false,        
        chinese: false,
        mediterranean: false,
        localFood: true,        
        howNear: "10-15 min",
        rating: "4,5/5",
        source: "https://share.google/tlcZm3jNozCbon0WS"
    },    
    {
        id: "cal coix",
        name: "Restaurant CAL COIX",            
        image: calCoix,
        description: {
            es: "El Restaurant Cal Coix es un restaurante acogedor donde se puede disfrutar de cocina catalana y mediterránea en un ambiente familiar y relajado. Ofrece platos tradicionales, carnes a la brasa y especialidades caseras preparadas con productos de calidad. Es un lugar ideal para comidas tranquilas con familia o amigos. Se encuentra a unos 20 minutos en coche.",
            en: "Restaurant Cal Coix is a cozy place where you can enjoy Catalan and Mediterranean cuisine in a relaxed, family-friendly atmosphere. It offers traditional dishes, grilled meats, and homemade specialties prepared with quality ingredients. It is an ideal place for a calm meal with family or friends. It is about a 20-minute drive away.",
            fr: "Le Restaurant Cal Coix est un restaurant chaleureux où l’on peut déguster une cuisine catalane et méditerranéenne dans une ambiance familiale et détendue. Il propose des plats traditionnels, des viandes grillées et des spécialités maison préparées avec des produits de qualité. C’est un endroit idéal pour un repas tranquille en famille ou entre amis. Il se trouve à environ 20 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: true,
        lunchAndDinner: false,        
        chinese: false,
        mediterranean: true,
        localFood: true,        
        howNear: "20-25 min",
        rating: "4,1/5",
        source: "https://share.google/8c3I13NXtpWvXKOig"
    },    
    {
        id: "carbo negre",
        name: "Carbó Negre",            
        image: carboNegre,
        description: {
            es: "El Restaurant Carbó Negre es un restaurante moderno especializado en carnes a la brasa y cocina mediterránea. Ofrece una carta variada con carnes de calidad, tapas y platos elaborados con productos frescos. Su ambiente es acogedor y agradable, ideal para comidas con amigos o en familia. Es una buena opción para disfrutar de la gastronomía local. Se encuentra a unos 20 minutos en coche.",
            en: "Restaurant Carbó Negre is a modern restaurant specializing in grilled meats and Mediterranean cuisine. It offers a varied menu with quality meats, tapas, and dishes prepared with fresh ingredients. The atmosphere is welcoming and pleasant, making it an ideal place for meals with friends or family. It is a great option to enjoy local gastronomy. It is about a 20-minute drive away.",
            fr: "Le Restaurant Carbó Negre est un restaurant moderne spécialisé dans les viandes grillées et la cuisine méditerranéenne. Il propose une carte variée avec des viandes de qualité, des tapas et des plats préparés avec des ingrédients frais. L’ambiance est chaleureuse et agréable, idéale pour des repas entre amis ou en famille. C’est une excellente option pour découvrir la gastronomie locale. Il se trouve à environ 20 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: false,
        lunchAndDinner: true,       
        chinese: false,
        mediterranean: true,
        localFood: true,        
        howNear: "20-25 min",
        rating: "4,1/5",
        source: "https://share.google/WNQB51izJiIH2Khz8"
    },    
    {
        id: "cal nano",
        name: "Restaurante Masía Cal Nano",            
        image: calNano,
        description: {
            es: "El Restaurante Masía Cal Nano es una acogedora masía catalana donde se puede disfrutar de cocina tradicional en un ambiente rústico y familiar. Su carta incluye carnes a la brasa, platos caseros y especialidades de la gastronomía catalana preparadas con productos de calidad. Es un lugar ideal para comidas tranquilas con amigos o en familia. Se encuentra a unos 17 minutos en coche.",
            en: "Restaurante Masía Cal Nano is a cozy Catalan farmhouse restaurant where you can enjoy traditional cuisine in a rustic, family-friendly atmosphere. The menu includes grilled meats, homemade dishes, and Catalan specialties prepared with quality ingredients. It is an ideal place for relaxed meals with friends or family. It is about a 17-minute drive away.",
            fr: "Le Restaurante Masía Cal Nano est une chaleureuse masia catalane où l’on peut déguster une cuisine traditionnelle dans une ambiance rustique et familiale. La carte propose des viandes grillées, des plats faits maison et des spécialités catalanes préparées avec des produits de qualité. C’est un endroit idéal pour des repas tranquilles entre amis ou en famille. Il se trouve à environ 17 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: true,
        lunchAndDinner: false,        
        chinese: false,
        mediterranean: false,
        localFood: true,        
        howNear: "15-20 min",
        rating: "4,1/5",
        source: "https://share.google/U4pjJLsD8OQWc9iOU"
    },    
    {
        id: "barbacoa can dieta",
        name: "Restaurant Barbacoa Can Dieta Tordera",            
        image: barbacoaCanDieta,
        description: {
            es: "El Restaurant Barbacoa Can Dieta, en Tordera, es un restaurante popular especializado en carnes a la brasa y cocina tradicional en un ambiente sencillo y acogedor. Su carta incluye parrilladas, platos caseros y raciones generosas, ideales para disfrutar de una comida con familia o amigos. Destaca por su sabor auténtico y su ambiente informal. Se encuentra a unos 17 minutos en coche.",
            en: "Restaurant Barbacoa Can Dieta in Tordera is a popular restaurant specializing in grilled meats and traditional cuisine in a simple and welcoming atmosphere. Its menu includes barbecue platters, homemade dishes, and generous portions, ideal for enjoying a meal with family or friends. It stands out for its authentic flavors and relaxed ambiance. It is about a 17-minute drive away.",
            fr: "Le Restaurant Barbacoa Can Dieta à Tordera est un restaurant populaire spécialisé dans les viandes grillées et la cuisine traditionnelle dans une ambiance simple et conviviale. La carte propose des grillades, des plats faits maison et des portions généreuses, idéales pour partager un repas en famille ou entre amis. Il se distingue par ses saveurs authentiques et son atmosphère détendue. Il se trouve à environ 17 minutes en voiture."
        },
        price: "10-20 €",        
        onlyLunch: true,
        lunchAndDinner: false,        
        chinese: false,
        mediterranean: false,
        localFood: true,        
        howNear: "15-20 min",
        rating: "4,2/5",
        source: "https://share.google/m4p0RdS4JWl1sfOu1"
    },    
    {
        id: "la bella",
        name: "La Bella Restaurant Asían Fusión",            
        image: laBella,
        description: {
            es: "El La Bella Restaurant Asian Fusión es un restaurante moderno donde se puede disfrutar de una variada cocina asiática en un ambiente elegante y acogedor. Su carta combina sushi, platos japoneses y otras especialidades asiáticas preparadas con ingredientes frescos. Es una buena opción para una cena tranquila o para compartir diferentes sabores con amigos o familia. Se encuentra a unos 27 minutos en coche.",
            en: "La Bella Restaurant Asian Fusion is a modern restaurant where you can enjoy a variety of Asian cuisine in an elegant and welcoming atmosphere. The menu combines sushi, Japanese dishes, and other Asian specialties prepared with fresh ingredients. It is a great option for a relaxed dinner or for sharing different flavors with friends or family. It is about a 27-minute drive away.",
            fr: "Le La Bella Restaurant Asian Fusion est un restaurant moderne où l’on peut déguster une cuisine asiatique variée dans une ambiance élégante et conviviale. La carte combine sushis, plats japonais et autres spécialités asiatiques préparées avec des ingrédients frais. C’est une excellente option pour un dîner tranquille ou pour partager différentes saveurs entre amis ou en famille. Il se trouve à environ 27 minutes en voiture."
        },
        price: "20-30 €",        
        onlyLunch: false,
        lunchAndDinner: true,       
        chinese: true,
        mediterranean: false,
        localFood: false,        
        howNear: "20-25 min",
        rating: "4,5/5",
        source: "https://share.google/9XdchJ2dHBvfrbUFM"
    },     
]