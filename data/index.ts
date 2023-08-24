const data = [
  {
    category: 'Hot drinks',
    item: 'Machiato',
    price: 2,
    image: '283A9856.JPG',
  },
  {
    category: 'Hot drinks',
    item: 'Camel tea',
    price: 1.5,
    image: '283A9861.JPG',
  },
  {
    category: 'Hot drinks',
    item: 'Coppacino',
    price: 1.5,
    image: '283A0050.JPG',
  },
  {
    category: 'Hot drinks',
    item: 'black tea',
    price: 1,
    image: '283A9865.JPG',
  },
  {
    category: 'Hot drinks',
    item: 'caffe lato',
    price: 1.5,
    image: '283A0057.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Water melon',
    price: 1,
    image: '283A0009.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Avocado',
    price: 2,
    image: '283A0012.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Beetroot',
    price: 2,
    image: '283A0022.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Apple machito',
    price: 2.5,
    image: '283A0025.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Feeto qaro',
    price: 2.5,
    image: '283A0033.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Orange ',
    price: 2,
    image: '283A0005.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Ice coffee',
    price: 3,
    image: 'IMG_9058.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Strowbery shake',
    price: 3,
    image: 'IMG_8977.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Blueberry',
    price: 2.5,
    image: 'IMG_9040.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Limon Iced',
    price: 2.5,
    image: 'IMG_9047.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'passion smooth',
    price: 3,
    image: '283A9894.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Passion machito',
    price: 2.5,
    image: '283A9896.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'iced coffea late',
    price: 3,
    image: '283A9941.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Apple smooth',
    price: 3,
    image: '283A9924.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Ice cremal late',
    price: 3,
    image: '283A9924.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Ice vanilla latea',
    price: 3,
    image: '283A9924.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Mango shake',
    price: 3,
    image: 'IMG_8982.JPG',
  },
  {
    category: 'Cold drinks',
    item: 'Chocolate shake',
    price: 3,
    image: 'IMG_8972.JPG',
  },
  {
    category: 'Lunch',
    item: 'SUQAR Geel',
    price: 5,
    image: '283A0019.JPG',
  },
  {
    category: 'Lunch',
    item: 'stov fish',
    price: 7,
    image: '283A9966.JPG',
  },
  {
    category: 'Lunch',
    item: 'Hilib Ari dhaylo',
    price: 8,
    image: '283A9976.JPG',
  },
  {
    category: 'Lunch',
    item: 'baasta saldata',
    price: 2,
    image: 'IMG_0058.JPG',
  },
  {
    category: 'Lunch',
    item: 'Maxcicano Fish',
    price: 8,
    image: '283A9870.JPG',
  },
  {
    category: 'Lunch',
    item: 'Crispy chicken cheese balls',
    price: 9,
    image: '283A9885.JPG',
  },
  {
    category: 'Lunch',
    item: 'Chicken satay',
    price: 9,
    image: '283A9895.JPG',
  },
  {
    category: 'Lunch',
    item: 'Phuket fish',
    price: 9,
    image: '283A9940.JPG',
  },
  {
    category: 'Lunch',
    item: 'Dragon chicken',
    price: 9,
    image: 'IMG_8924.JPG',
  },
  {
    category: 'Lunch',
    item: 'chilli & chicken',
    price: 9,
    image: 'IMG_8943.JPG',
  },
  {
    category: 'Lunch',
    item: 'Lolly Pop chicken',
    price: 9,
    image: 'IMG_8964.JPG',
  },
  {
    category: 'Lunch',
    item: 'Oriental chicken',
    price: 9,
    image: 'IMG_8968.JPG',
  },
  {
    category: 'Lunch',
    item: 'Mangolian chicken',
    price: 9,
    image: 'IMG_8970.JPG',
  },
  {
    category: 'Lunch',
    item: 'Green Salad',
    price: 3,
    image: 'IMG_9008.JPG',
  },
  {
    category: 'Lunch',
    item: 'Hilib Ido  dheylo',
    price: 10,
    image: 'IMG_0014.JPG',
  },
  {
    category: 'Lunch',
    item: 'Chicken Curry',
    price: 7,
    image: 'IMG_0026.JPG',
  },
  {
    category: 'Lunch',
    item: ' Camel steak ',
    price: 7,
    image: 'IMG_0032.JPG',
  },
  {
    category: 'Lunch',
    item: 'Chicken broast 3 leg',
    price: 7,
    image: 'IMG_0037.JPG',
  },
  {
    category: 'Lunch',
    item: 'Hilib Geel',
    price: 7,
    image: 'IMG_0051.JPG',
  },
  {
    category: 'Lunch',
    item: 'Chicken steak',
    price: 7,
    image: 'IMG_0066.JPG',
  },
  {
    category: 'Lunch',
    item: 'Salad',
    price: 2,
    image: 'IMG_0070.JPG',
  },
  {
    category: 'Lunch',
    item: 'Balat fish',
    price: 8,
    image: 'IMG_8940.JPG',
  },
  {
    category: 'Lunch',
    item: 'Grilled fish',
    price: 8,
    image: 'IMG_8949.JPG',
  },
  {
    category: 'Lunch',
    item: 'SHANGHAI FISH',
    price: 8,
    image: 'IMG_8955.JPG',
  },
  {
    category: 'Lunch',
    item: 'SUQAR GEEL',
    price: 8,
    image: 'IMG_9985.JPG',
  },
  {
    category: 'Lunch',
    item: 'Maxicano chicken',
    price: 6,
    image: '283A9874.JPG',
  },
  {
    category: 'Lunch',
    item: 'Salad fish',
    price: 4.5,
    image: '283A9906.JPG',
  },
  {
    category: 'Lunch',
    item: 'Salad chicken',
    price: 4.5,
    image: '283A9908.JPG',
  },
  {
    category: 'Breakfast',
    item: 'Beer ',
    price: 3,
    image: '283A9889.JPG',
  },
  {
    category: 'Breakfast',
    item: 'Foul medanes',
    price: 2,
    image: '283A9900.JPG',
  },
  {
    category: 'Breakfast',
    item: 'Shakshuuko',
    price: 2.5,
    image: '283A9912.JPG',
  },
  {
    category: 'Breakfast',
    item: 'Omlet toste',
    price: 3,
    image: '283A9914.JPG',
  },
  {
    category: 'Breakfast',
    item: 'Malawax',
    price: 0.5,
    image: '283A9918.JPG',
  },
  {
    category: 'Breakfast',
    item: 'Omlet ',
    price: 2,
    image: '283A9933.JPG',
  },
  {
    category: 'Dinner',
    item: 'Salad chicken',
    price: 5,
    image: '283A9906.JPG',
  },
  {
    category: 'Dinner',
    item: 'Salad fish',
    price: 5,
    image: '283A9908.JPG',
  },
  {
    category: 'Dinner',
    item: ' Pizza Large',
    price: 13,
    image: '283A9879.JPG',
  },
  {
    category: 'Dinner',
    item: 'Fish burger ',
    price: 4,
    image: '283A9949.JPG',
  },
  {
    category: 'Dinner',
    item: 'Shuwaarma Fish',
    price: 4,
    image: '283A9953.JPG',
  },
]

const baseUrl = `https://farshaxan.blr1.cdn.digitaloceanspaces.com/la_bella`

export const getItems = () => {
  return data.map((item) => ({
    ...item,
    image: `${baseUrl}/${item.image}`,
  }))
}

export const getCategories = () => {
  return getItems().map((item) => item.category)
}

export const getItemsByCategory = (category: string) => {
  return getItems().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )
}
