import lidlImg from '../assets/supermarketPictures/lidl.webp'
import carrefourImg from '../assets/supermarketPictures/carrefour.webp'
import mercadonaImg from '../assets/supermarketPictures/mercadona.webp'

export const supermarkets = [
    {
        id: "carrefour",
        name: "Carrefour",
        image: carrefourImg,
        description: {
            es: "Este es un gran supermercado donde puedes comprar todo lo necesario: alimentación, droguería, artículos para el cuidado del bebé, textil, equipamiento deportivo y productos de cosmética. En el mismo edificio también puedes encontrar panadería con productos recién horneados, comida preparada y sushi. Se encuentra a 8 km y a unos 15 minutos en coche.",
            en: "This is a large supermarket where you can buy everything you need: groceries, household and cleaning products, baby care items, clothing, sports equipment, and cosmetics. In the same building, you can also find a bakery with freshly baked goods, ready-made meals, and sushi. It is located 8 km away and about a 15-minute drive.",
            fr: "Il s’agit d’un grand supermarché où vous pouvez acheter tout ce dont vous avez besoin : produits alimentaires, droguerie, articles pour le soin du bébé, textile, équipements sportifs et produits cosmétiques. Dans le même bâtiment, vous trouverez également une boulangerie avec des produits fraîchement cuits, des plats préparés et des sushis. Il se trouve à 8 km, soit environ 15 minutes en voiture.",
        },        
        source: "https://share.google/yQ5DG3qLVGdiMQsa1"
    },
    {
        id: "lidl",
        name: "Lidl",
        image: lidlImg,
        description: {
            es: "Lidl es un supermercado práctico y económico donde puedes hacer la compra diaria con comodidad. Ofrece alimentos frescos, frutas y verduras, pan recién horneado y productos de limpieza, además de promociones semanales y artículos para el hogar. Se encuentra a 8,3 km, a unos 13 minutos en coche.",
            en: "Lidl is a practical and affordable supermarket where you can do your daily shopping conveniently. It offers fresh food, fruits and vegetables, freshly baked bread, and cleaning products, as well as weekly promotions and home goods. It is located 8.3 km away, about a 13-minute drive.",
            fr: "Lidl est un supermarché pratique et économique où vous pouvez faire vos courses quotidiennes en toute simplicité. Il propose des produits frais, fruits et légumes, du pain fraîchement cuit et des produits de nettoyage, ainsi que des promotions hebdomadaires et des articles pour la maison. Il se trouve à 8,3 km, soit environ 13 minutes en voiture.",
        },
        source: "https://share.google/byH0NZcQOFEtddJj0"
    },
    {
        id: "mercadona",
        name: "Mercadona",
        image: mercadonaImg,
        description: {
            es: "Mercadona es un supermercado moderno y bien organizado donde puedes hacer la compra diaria con comodidad. Ofrece productos frescos, frutas y verduras, panadería, platos preparados y artículos de limpieza y hogar, además de marcas propias de calidad. Se encuentra a 7 km, a unos 14 minutos en coche.",
            en: "Mercadona is a modern and well-organized supermarket where you can do your daily shopping comfortably. It offers fresh products, fruits and vegetables, a bakery, ready-made meals, and household items, as well as quality private-label brands. It is located 7 km away, about a 14-minute drive.",
            fr: "Mercadona est un supermarché moderne et bien organisé où vous pouvez faire vos courses quotidiennes en toute simplicité. Il propose des produits frais, fruits et légumes, une boulangerie, des plats préparés et des articles pour la maison, ainsi que des marques propres de qualité. Il se trouve à 7 km, soit environ 14 minutes en voiture.",
        },
        source: "https://share.google/keWClDF5NcZQOeIXl"
    }    
]