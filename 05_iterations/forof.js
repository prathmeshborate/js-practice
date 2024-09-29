// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    } else {
        // console.log(greet);
    }
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('UAE', "United Arab Emirates")
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':- ', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'Asphalt9'
}
for (const [key, value] of myObject) {
    // console.log(key, ':- ', value);
}