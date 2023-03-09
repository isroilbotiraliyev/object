const user = {
    addres: {
        street: 'Muqumiy',
        number: 10,
        price1: 250
    },

    google: {
        pass: 123456,
        login: 'Nickname',
        price: 500
    }
}
for (const key in user) {
    for (const key3 in user[key]) {
        if (key3 == 'price1') {
            console.log(user[key][key3]);
            var natija1 = user[key][key3];

        }
    }

}
for (const key in user) {
    for (const key2 in user[key]) {
        if (key2 == 'price') {
            console.log(user[key][key2]);
            var natija = user[key][key2];


        }
    }

}
var javob = natija1 + natija;

console.log(`${natija1} + ${ natija } = ${ javob}`);






