const prices = [10, 30, 15, 25, 50, 50, 5];

// ****** Map
// const salePrices = prices.map((price) => {
// return price / 2;
// });

// console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
]

const filteredSales = products.map((product) => {
    if(product.price > 30) {
        return {name: product.name, price: product.price/2}
    } else {
        return product;
    }
})

console.log(filteredSales)

// ******* Filter

// const filteredScores =scores.filter((score) => {
//     return score > 20
// })

// console.log(filteredScores)

// users = [
//     {name: 'Harrison', premium: true},
//     {name: 'Jack', premium: false},
//     {name: 'Tim', premium: true},
//     {name: 'James', premium: false},
//     {name: 'Joe', premium: false},
// ];

// const premiumUsers = users.filter((user) => {
// return user.premium;
// });

// console.log(premiumUsers);