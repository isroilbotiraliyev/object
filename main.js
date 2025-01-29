

for (let i = 1; i < 11; i++) {
    let userName = prompt('ismizni kiriting')
    let userAge = +prompt('yoshingizni kiriting')
    
    let users = {
        i: {
            name: userName,
            age: userAge
        }
    }
    for (const key in users) {
        for (const key2 in users[key]) {
        
            console.log(`${i} chi foydalanuvchi 
            ismi: ${users[key].name} 
            yoshi: ${users[key].age}`);
        
        }
        
    }
    
}