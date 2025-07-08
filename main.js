const products = [
  {
    id: 1,
    title: "Смартфон Galaxy X",
    price: 29999,
    description: "Мощный смартфон с AMOLED-дисплеем и 3 камерами.",
  },
  {
    id: 2,
    title: "Ноутбук TechBook 15",
    price: 64999,
    description: "Универсальный ноутбук для работы и развлечений.",
  },
  {
    id: 3,
    title: "Наушники NoiseOff",
    price: 4999,
    description: "Беспроводные наушники с шумоподавлением.",
  },
]

// Затем с помощью JS пройдитесь по массиву products с помощью forEach или цикла и для каждого товара создайте DOM-элементы
products.forEach(goods => {
  const divCard = document.createElement('div')
  divCard.classList.add('card', 'data-id', 'data-price')

  const divTitle = document.createElement('div')
  divTitle.classList.add('title')
  divTitle.textContent = goods.title
  
  const divPrice = document.createElement('div')
  divPrice.classList.add('price')
  divPrice.textContent = goods.price + ' ₽'

  const divDescription = document.createElement('div')
  divDescription.classList.add('description')
  divDescription.textContent = goods.description

  const buyBtn = document.createElement('button')
  buyBtn.classList.add('btn', 'buy-btn')
  buyBtn.textContent = 'Купить'

  const moreBtn = document.createElement('button')
  moreBtn.classList.add('btn', 'more-btn')
  moreBtn.textContent = 'Подробнее'

  divCard.append(divTitle, divPrice, divDescription, buyBtn, moreBtn)
  
  document.body.append(divCard)

  console.log(goods)
  console.log(divCard)
})
