function getRandomValue(min:number, max:number){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

export const destinationItems = [
    {
        "id": "1",
        "image": "/skardu.jpg",
        "title": "Skardu",
        "rating": getRandomValue(1, 5),
        "period": "2 Days 1 Night",
        "price": getRandomValue(10000, 20000)
    },
    {
        "id": "2",
        "image": "/hunza.jpg",
        "title": "Hunza",
        "rating": getRandomValue(1, 5),
        "period": "3 Days 2 Nights",
        "price": getRandomValue(15000, 25000)
    },
    {
        "id": "3",
        "image": "/muree.jpg",
        "title": "Muree",
        "rating": getRandomValue(1, 5),
        "period": "1 Day 1 Night",
        "price": getRandomValue(5000, 10000)
    },
    {
        "id": "4",
        "image": "/naran.jpg",
        "title": "Naran",
        "rating": getRandomValue(1, 5),
        "period": "2 Days 1 Night",
        "price": getRandomValue(12000, 22000)
    },
    {
        "id": "5",
        "image": "/rakaposhi.jpg",
        "title": "Rakaposhi",
        "rating": getRandomValue(1, 5),
        "period": "3 Days 2 Nights",
        "price": getRandomValue(16000, 26000)
    },
    {
        "id": "6",
        "image": "/sawat.jpg",
        "title": "Sawat",
        "rating": getRandomValue(1, 5),
        "period": "4 Days 3 Nights",
        "price": getRandomValue(20000, 30000)
    },
    {
        "id": "7",
        "image": "/saif.jpg",
        "title": "Saif Ul Malook",
        "rating": getRandomValue(1, 5),
        "period": "5 Days 4 Nights",
        "price": getRandomValue(25000, 35000)
    },
    {
        "id": "8",
        "image": "/chitral.jpg",
        "title": "Chitral",
        "rating": getRandomValue(1, 5),
        "period": "3 Days 2 Nights",
        "price": getRandomValue(15000, 25000)
    },
    {
        "id": "9",
        "image": "/anso.webp",
        "title": "Anso Lake",
        "rating": getRandomValue(1, 5),
        "period": "5 Days 4 Nights",
        "price": getRandomValue(30000, 40000)
    },
    {
        "id": "10",
        "image": "/kalaam.webp",
        "title": "Kalaam",
        "rating": getRandomValue(1, 5),
        "period": "3 Days 2 Nights",
        "price": getRandomValue(17000, 27000)
    },
    {
        "id": "11",
        "image": "/kumrat.jpg",
        "title": "Kumrat",
        "rating": getRandomValue(1, 5),
        "period": "1 Day 1 Night",
        "price": getRandomValue(8000, 15000)
    },
    {
        "id": "12",
        "image": "/nelam.jpg",
        "title": "Neelum Valley",
        "rating": getRandomValue(1, 5),
        "period": "4 Days 3 Nights",
        "price": getRandomValue(20000, 30000)
    }
  ]
  

  const adjectives = [
    "Rustic", "Charming", "Majestic", "Picturesque", "Cozy", "Inviting"
  ];
  
  const nouns = [
    "Lodge", "Cottage", "Retreat", "Haven", "Hideaway", "Cabin"
  ];
  
  function generateRandomTitle() {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    return `${randomAdjective} ${randomNoun}`;
  }

  export const hotels = [
    {
      id: "1",
      image: "/hotel1.jpg",
      title: generateRandomTitle(),
      bed: "Double Bed",
      capacity: getRandomValue(1, 3),
      rating: getRandomValue(1, 5),
      price: getRandomValue(50, 1000)
    },
    {
      id: "2",
      image: "/hotel2.jpg",
      title: generateRandomTitle(),
      bed: "Queens Bed",
      capacity: getRandomValue(1, 3),
      rating: getRandomValue(1, 5),
      price: getRandomValue(50, 1000)
    },
    {
      id: "3",
      image: "/hotel5.webp",
      title: generateRandomTitle(),
      bed: "Single Bed",
      capacity: getRandomValue(1, 3),
      rating: getRandomValue(1, 5),
      price: getRandomValue(50, 1000)
    },
    {
      id: "4",
      image: "/hotel4.jpg",
      title: generateRandomTitle(),
      bed: "Kings Bed",
      capacity: getRandomValue(1, 3),
      rating: getRandomValue(1, 5),
      price: getRandomValue(50, 1000)
    }
  ]
  
export const testmonials = [
    {
        name: "Sadia",
        rating: 1,
        description:
        "Lorem, ipsum dolor sit amet consectetur psum voluptate inventore itaque dicta aut accusantium optio ex cum reiciendis, dignissimos porro! Autem, numquam",
        country: "Pakistan",
        image: "/profile1.jpg"
    },

    {
        name: "Bakhtawar",
        rating: 2,
        description:
        "Lorem, ipsam aliquid commodi eveniet ipsum voluptate inventore itaque dicta aut accusantium optio ex cum reiciendis, dignissimos porro! Autem, numquam",
        country: "Pakistan",
        image: "/profile2.jpg"
    },

    {
        name: "Zayan",
        rating: 3,
        description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere corporis ratione, ipsam aliquid commodi eveniet ipsum voluptate reiciendis, dignissimos porro! Autem, numquam",
        country: "Pakistan",
        image: "/profile3.jpg"
    },

    {
        name: "Shehriyar",
        rating: 4,
        description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere corporis ratione, ipsam aliquid commodi eveniet ipsum  Autem, numquam",
        country: "Pakistan",
        image: "/profile4.jpg"
    }
]
 
















