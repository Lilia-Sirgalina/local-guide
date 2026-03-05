import santaSusanna from '../assets/beachesPictures/santa-susanna.png'
import blanes from '../assets/beachesPictures/blanes.jpg'
import calaTrons from '../assets/beachesPictures/cala-trons.jpg'
import lloret from '../assets/beachesPictures/lloret-de-mar.jpg'
import malgrat from '../assets/beachesPictures/malgrat-de-mar.jpg'
import pineda from '../assets/beachesPictures/pineda-de-mar.jpg'
import saCaleta from '../assets/beachesPictures/sa-caleta.jpg'
import santFrancesc from '../assets/beachesPictures/sant-francesc.jpg'
import santaCristina from '../assets/beachesPictures/santa-cristina.webp'

export const beaches = [
    {
        id: "Santa Susanna",
        name: "Playa de las Dunas",            
        image: santaSusanna,
        description: {
            es: "Playa de las Dunas en Santa Susanna es una playa amplia y cómoda, ideal para pasar el día con tranquilidad. El acceso es fácil: hay que pasar por debajo del puente y entrar directamente a la playa. A lo largo de la costa discurre una larga carretera; conduciendo en dirección a Pineda de Mar se encuentra un gran aparcamiento. El paisaje se completa con un búnker de la Guerra Civil y la base náutica, donde se puede alquilar paddle surf, kayak, etc. Se encuentra a unos 16 minutos en coche.",
            en: "Playa de las Dunas in Santa Susanna is a wide and comfortable beach, ideal for spending a peaceful day. Access is easy: drive under the bridge and enter directly onto the beach. A long coastal road runs alongside it; heading toward Pineda de Mar you will find a large parking area. The landscape features a Spanish Civil War bunker and a nautical base where you can rent paddle boards, kayaks, and more. It is about a 16-minute drive away.",
            fr: "La Playa de las Dunas à Santa Susanna est une plage vaste et confortable, idéale pour passer une journée tranquille. L’accès est facile : il faut passer sous le pont et entrer directement sur la plage. Une longue route longe le littoral ; en direction de Pineda de Mar, vous trouverez un grand parking. Le paysage comprend un bunker de la guerre civile espagnole et une base nautique où l’on peut louer paddle, kayak, etc. Elle se trouve à environ 16 minutes en voiture."
        },
        surface: "sand",
        snorkeling: false,
        kidsFriendly: true,
        restaurant: false,
        howNear: "15-20 min",
        gps: "https://maps.app.goo.gl/9K8Cxu2e5yZARwxv5"
    },
    {
        id: "Santa Cristina",
        name: "Playa de Santa Cristina",
        image: santaCristina,
        description: {
            es: "La playa de Santa Cristina es una playa familiar de aguas cristalinas y poco profundas, con arena fina, frecuentada principalmente por bañistas locales y algunos turistas. Está dividida por una roca con una abertura que conecta la playa principal con Cala Treumal, más pequeña e íntima. Desde el aparcamiento hay que descender unos 300 metros. Es un lugar muy pintoresco donde se obtienen fotografías espectaculares. Los aficionados al snorkel pueden buscar una imagen de Santa Cristina oculta bajo el mar. Se encuentra a 22 minutos en coche.",
            en: "Santa Cristina Beach is a family-friendly beach with crystal-clear, shallow waters and fine sand, mainly visited by locals and some tourists. It is divided by a rock with an opening that connects the main beach with Cala Treumal, a smaller and more intimate cove. From the parking area, you must walk down about 300 meters. It is a very picturesque place where you can take spectacular photos. Snorkeling enthusiasts can look for an image of Saint Christina hidden beneath the sea. It is a 22-minute drive away.",
            fr: "La plage de Santa Cristina est une plage familiale aux eaux cristallines et peu profondes, avec du sable fin, fréquentée principalement par des habitants et quelques touristes. Elle est divisée par un rocher percé qui relie la plage principale à Cala Treumal, une crique plus petite et intime. Depuis le parking, il faut descendre environ 300 mètres. C’est un endroit très pittoresque où l’on peut prendre de magnifiques photos. Les amateurs de snorkeling peuvent chercher une image de Sainte Christine cachée sous la mer. Il se trouve à 22 minutes en voiture.",
        },
        surface: "sand",
        snorkeling: true,
        kidsFriendly: true,
        restaurant: true,
        howNear: "20-25 min",
        gps: "https://maps.app.goo.gl/usFvo63FZMogoh4K9"
    },
    {
        id: "Malgrat de mar",
        name: "Playa Malgrat",
        image: malgrat,
        description: {
            es: "La Playa Malgrat es un rincón tranquilo donde encontrará una playa casi virgen, con poca gente y pocos servicios, ideal para quienes desean disfrutar del mar con calma. La visitan principalmente residentes locales, por lo que suele estar poco concurrida, a diferencia de otras playas más turísticas. Se encuentra a unos 17 minutos en coche y se recomienda acceder desde Malgrat de Mar.",
            en: "Playa Malgrat is a peaceful spot where you will find an almost unspoiled beach, with few visitors and limited services, ideal for those who want to enjoy the sea in tranquility. It is mainly visited by locals, so it is usually uncrowded, unlike more touristy beaches. It is about a 17-minute drive away, and access from Malgrat de Mar is recommended.",
            fr: "La Playa Malgrat est un endroit paisible où vous trouverez une plage presque vierge, peu fréquentée et avec peu de services, idéale pour ceux qui souhaitent profiter de la mer en toute tranquillité. Elle est principalement fréquentée par les habitants, ce qui la rend généralement moins bondée que les plages plus touristiques. Elle se trouve à environ 17 minutes en voiture et il est recommandé d’y accéder depuis Malgrat de Mar."
        },
        surface: "sand",
        snorkeling: false,
        kidsFriendly: true,
        restaurant: false,
        howNear: "15-20 min",
        gps: "https://maps.app.goo.gl/trn2uZA6p9zPDFwV6"
    },
    {
        id: "Pineda de Mar",
        name: "Playa de los Pinos",
        image: pineda,
        description: {
            es: "La playa de los Pinos de Pineda de Mar, situada al norte del municipio, es una playa amplia y de ambiente natural mediterráneo, rodeada de un espectacular pinar que invita a pasear y disfrutar en familia. Es ideal para pasar todo el día, con zona de picnic y espacios para el descanso. Aquí se encuentran el Club Náutico y la Base Náutica, donde grandes y pequeños pueden practicar windsurf, kayak de mar y otras actividades acuáticas. Se encuentra a unos 16 minutos en coche.",
            en: "Playa de los Pinos in Pineda de Mar, located north of the town, is a wide beach with a natural Mediterranean atmosphere, surrounded by an impressive pine grove that invites relaxing walks and family time. It is ideal for spending the whole day, with picnic areas and spaces to rest. The Nautical Club and Nautical Base are located here, where visitors of all ages can enjoy windsurfing, sea kayaking, and other water activities. It is about a 16-minute drive away.",
            fr: "La plage des Pins de Pineda de Mar, située au nord de la ville, est une plage large au caractère méditerranéen naturel, entourée d’une pinède spectaculaire qui invite à la promenade et aux moments en famille. Elle est idéale pour passer toute la journée, avec des espaces de pique-nique et de détente. On y trouve le Club Nautique et la Base Nautique, où petits et grands peuvent pratiquer la planche à voile, le kayak de mer et d’autres activités nautiques. Elle se trouve à environ 16 minutes en voiture."
        },
        surface: "sand",
        snorkeling: false,
        kidsFriendly: true,
        restaurant: true,
        howNear: "15-20 min",
        gps: "https://maps.app.goo.gl/tofg5y4VDSdCiosN7"
    },
    {
        id: "Blanes",
        name: "Playa S'Abanell en Blanes",
        image: blanes,
        description: {
            es: "La Playa de S’Abanell es la más extensa y concurrida de Blanes, con unos 2,3 km de longitud desde Sa Palomera hasta la desembocadura del río Tordera. Situada en un entorno urbano animado, ofrece fácil acceso y numerosos servicios: bares y restaurantes, duchas, lavapiés y alquiler de hamacas. Es accesible para personas con movilidad reducida, con rampas, pasarelas y sillas anfibias. Se encuentra a unos 20 minutos en coche.",
            en: "S’Abanell Beach is the longest and most popular beach in Blanes, stretching about 2.3 km from Sa Palomera to the mouth of the Tordera River. Located in a lively urban area, it offers easy access and numerous services, including bars and restaurants, showers, foot washes, and sunbed rentals. It is accessible for people with reduced mobility, with ramps, walkways, and amphibious chairs. It is about a 20-minute drive away.",
            fr: "La plage de S’Abanell est la plus longue et la plus fréquentée de Blanes, s’étendant sur environ 2,3 km depuis Sa Palomera jusqu’à l’embouchure de la Tordera. Située dans un environnement urbain animé, elle offre un accès facile et de nombreux services : bars et restaurants, douches, rince-pieds et location de transats. Elle est accessible aux personnes à mobilité réduite, avec rampes, passerelles et fauteuils amphibies. Elle se trouve à environ 20 minutes en voiture."
        },
        surface: "sand",
        snorkeling: false,
        kidsFriendly: true,
        restaurant: true,
        howNear: "20-25 min",
        gps: "https://maps.app.goo.gl/Rr6UV2j3GT3Sia3x8"
    },
    {
        id: "Lloret de Mar",
        name: "Playa de Fenals en Lloret de Mar",
        image: lloret,
        description: {
            es: "La playa de Fenals es la segunda más grande de Lloret de Mar, con unos 700 metros de longitud, situada en una bahía protegida del viento por un macizo que la separa del centro urbano. Su arena gruesa y sus aguas tranquilas y cristalinas la hacen ideal para disfrutar del mar con comodidad. Ofrece numerosos servicios y actividades: alquiler de sombrillas y hamacas, kayak, parasailing, zona deportiva, restaurantes y miniclub. Se encuentra a unos 22 minutos en coche.",
            en: "Fenals Beach is the second largest beach in Lloret de Mar, about 700 meters long, located in a bay sheltered from the wind by a massif that separates it from the town center. Its coarse sand and calm, crystal-clear waters make it ideal for enjoying the sea in comfort. It offers numerous services and activities, including umbrella and sunbed rentals, kayaking, parasailing, sports areas, restaurants, and a mini club. It is about a 22-minute drive away.",
            fr: "La plage de Fenals est la deuxième plus grande plage de Lloret de Mar, avec environ 700 mètres de longueur, située dans une baie protégée du vent par un massif qui la sépare du centre urbain. Son sable grossier et ses eaux calmes et cristallines en font un lieu idéal pour profiter de la mer en tout confort. Elle propose de nombreux services et activités : location de parasols et de transats, kayak, parasailing, zones sportives, restaurants et mini-club. Elle se trouve à environ 22 minutes en voiture."
        },
        surface: "sand",
        snorkeling: false,
        kidsFriendly: true,
        restaurant: true,
        howNear: "20-25 min",
        gps: "https://maps.app.goo.gl/XhkFuoU1RXg7TeqL8"
    },
    {
        id: "Sant Fransesc",
        name: "Cala Sant Francesc",
        image: santFrancesc,
        description: {
            es: "La cala de Sant Francesc es una playa bonita y bien equipada situada frente a una tranquila zona residencial, a poco más de un kilómetro del centro de Blanes. Con unos 170 metros de longitud y arena de grano grueso, ofrece aguas claras y un entorno natural con abundantes árboles. Dispone de duchas, chiringuito, alquiler de tumbonas y una pequeña zona de aparcamiento. A la izquierda se extiende una zona rocosa ideal para buceo y pesca. Se encuentra a unos 25 minutos en coche.",
            en: "Cala Sant Francesc is a beautiful and well-equipped beach located opposite a quiet residential area, just over one kilometer from the center of Blanes. About 170 meters long and composed of coarse sand, it offers clear waters and a natural setting with abundant trees. It has showers, a beach bar, sunbed rentals, and a small parking area. To the left, a rocky area is ideal for diving and fishing. It is about a 25-minute drive away.",
            fr: "La cala Sant Francesc est une plage belle et bien équipée située face à un quartier résidentiel calme, à un peu plus d’un kilomètre du centre de Blanes. Longue d’environ 170 mètres et composée de sable grossier, elle offre des eaux claires et un cadre naturel arboré. Elle dispose de douches, d’un bar de plage, de location de transats et d’un petit parking. À gauche, une zone rocheuse est idéale pour la plongée et la pêche. Elle se trouve à environ 25 minutes en voiture."
        },
        surface: "sand",
        snorkeling: true,
        kidsFriendly: true,
        restaurant: true,
        howNear: "25-30 min",
        gps: "https://maps.app.goo.gl/6wH4oCj1h7shUV1BA"
    },
    {
        id: "Sa Caleta",
        name: "Cala Sa Caleta y Cala dels Frarers",
        image: saCaleta,
        description: {
            es: "Sa Caleta, situada al final del paseo de Lloret de Mar junto al Castillo d’en Plaja, es una pintoresca cala de arena dorada y gruesa donde se concentran embarcaciones en verano. Sus aguas poco profundas y claras la hacen ideal para el baño y el buceo. Dispone de duchas, chiringuito y fácil acceso. A solo 200 metros se encuentra Cala dels Frares, más salvaje y rocosa, sin servicios y menos concurrida. Se encuentran a unos 28 minutos en coche.",
            en: "Sa Caleta, located at the end of the Lloret de Mar promenade next to the Castle of En Plaja, is a picturesque cove with golden, coarse sand where many boats gather in summer. Its shallow, clear waters make it ideal for swimming and diving. It offers showers, a beach bar, and easy access. Just 200 meters away is Cala dels Frares, wilder and rockier, with no services and fewer visitors. They are about a 28-minute drive away.",
            fr: "Sa Caleta, située au bout de la promenade de Lloret de Mar, à côté du château d’En Plaja, est une crique pittoresque au sable doré et grossier où de nombreuses embarcations se rassemblent en été. Ses eaux peu profondes et claires la rendent idéale pour la baignade et la plongée. Elle dispose de douches, d’un bar de plage et d’un accès facile. À seulement 200 mètres se trouve Cala dels Frares, plus sauvage et rocheuse, sans services et moins fréquentée. Elles se trouvent à environ 28 minutes en voiture."
        },
        surface: "sand",
        snorkeling: true,
        kidsFriendly: true,
        restaurant: true,
        howNear: "25-30 min",
        gps: "https://maps.app.goo.gl/8g3AQnVaURJrX7u47"
    },
    {
        id: "Cala Trons",
        name: "Cala Trons",
        image: calaTrons,
        description: {
            es: "La pequeña Cala d’En Trons se encuentra en un tramo abrupto del litoral entre las playas de Lloret y Canyelles. Con unos 45 metros de longitud, combina arena gruesa y grandes piedras, con un fondo marino rocoso y aguas cristalinas ideales para el snorkel. La entrada al mar es algo pronunciada. Al no disponer de servicios y por su terreno pedregoso, no es adecuada para niños pequeños ni personas mayores. Se encuentra a unos 31 minutos en coche.",
            en: "The small Cala d’En Trons is located along a rugged stretch of coastline between the beaches of Lloret and Canyelles. About 45 meters long, it combines coarse sand and large stones, with a rocky seabed and crystal-clear waters ideal for snorkeling. The entrance into the sea is somewhat steep. With no services and a rocky surface, it is not suitable for small children or elderly visitors. It is about a 31-minute drive away.",
            fr: "La petite Cala d’En Trons se situe sur un tronçon escarpé du littoral entre les plages de Lloret et Canyelles. Longue d’environ 45 mètres, elle combine sable grossier et grosses pierres, avec un fond marin rocheux et des eaux cristallines idéales pour le snorkeling. L’entrée dans la mer est assez prononcée. Sans services et en raison de son terrain rocheux, elle n’est pas adaptée aux jeunes enfants ni aux personnes âgées. Elle se trouve à environ 31 minutes en voiture."
        },
        surface: "rocky",
        snorkeling: true,
        kidsFriendly: false,
        restaurant: false,
        howNear: "25-30 min",
        gps: "https://maps.app.goo.gl/8N1qU7ijhAdGNeBf9"
    },    
]