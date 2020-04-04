const scores = [10, 30, 15, 25, 50, 50, 5];

// const filteredScores =scores.filter((score) => {
//     return score > 20
// })

// console.log(filteredScores)

users = [
    {name: 'Harrison', premium: true},
    {name: 'Jack', premium: false},
    {name: 'Tim', premium: true},
    {name: 'James', premium: false},
    {name: 'Joe', premium: false},
];

const premiumUsers = users.filter((user) => {
return user.premium;
});

console.log(premiumUsers);