const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    RB: 'Ruby',
    swift: 'Swift by Apple'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(`${key} is ${programming[key]}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('UAE', "United Arab Emirates")
for (const key in map) {
    // console.log(key);
}