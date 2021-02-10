// fetch("https://api.sampleapis.com/beers/ale")
//     .then(response => response.json())
//     .then(ale => {
//         console.log(ale)
//     })
// // ale - масив, в якому обєкти, і ми можемо до них звертатись

// fetch("https://api.sampleapis.com/futurama/characters")
//     .then(response => response.json())
//     .then(characters => {
//         for(character of characters){
//             document.write(`
//                 <div>
//                     <h4>${character.name.first}</h4>
//                     <img src="${character.images.main}">
//                     <p>${character.sayings + "<br/>"}</p>
//                 </div>           
//             `)
//         }
//     })

// fetch("https://api.sampleapis.com/futurama/characters")
//     .then(response => response.json())
//     .then(characters => {
//         for(let i = 1; i <= 3; i++){
//             let character = characters[i]
//             document.write(`
//                 <div>
//                     <h4>${character.name.first} ${character.name.middle} ${character.name.last}</h4>
//                     <img src="${character.images.main}">
//                     <hr/>
//                 </div>
//             `)
//         }
//     })

// let users = {
//     user: "Ostap",
//     age: 20,
//     sister: {
//         user: "Marta",
//         age: 27
//     }
// }

// console.log(users)

// jsonUsers = JSON.stringify(users)

// console.log(jsonUsers)

// jsonParsed = JSON.parse(jsonUsers)


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(users[7].status)
console.log(users[10].status)
console.log(users[9].name)
console.log(users[2].name)
console.log(users[9].age)
console.log(users[4].age, users[4].name)

let family = [{
        name: "Viktor",
        age: 50,
        status: true,
        whoIsWho: "Father",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Opel_Astra_J_front_20100725.jpg/305px-Opel_Astra_J_front_20100725.jpg"
    },
    {
        name: "Tatjana",
        age: 49,
        status: true,
        whoIsWho: "Mother",
        image: "https://img01.flagma.ua/photo/b-u-zapchasti-na-renault-scenic-grand-scenic-4682818_big.jpg"
    },
    {
        name: "Marta",
        age: 27,
        status: true,
        whoIsWho: "Sister",
        image: "https://cdn3.riastatic.com/photosnew/auto/photo/chevrolet_matiz__271889473bx.jpg"
    },
    {
        name: "Ostap",
        age: 20,
        status: false,
        whoIsWho: "Me",
        image: "https://realnoevremya.ru/uploads/news/ed/87/112925b245040a22.jpg"
    }
]

for (person of family) {
    console.log(person.name, person.age)
}

for (person of family) {
    document.write(`
        <div>
            <h4>${person.name}</h4>
            <p>
                Age: ${person.age}<br/>
                Role in the family: ${person.whoIsWho}
            </p>
            <img src = "${person.image}">
            <hr/>
        </div>
    `)
}


for (i = 0; i <= 1; i++){
    let person = family[i];
    document.write(person.name + "<br/>")
}

const a = document.getElementById("header");
console.log(a)
a.innerHTML = "hello world";
