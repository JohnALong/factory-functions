// console.log("linked");

// // start of sample code in chapter
// const metals = [
//     { metal: "Sterling Silver", price: 12.42 },
//     { metal: "14K Gold", price: 736.4 },
//     { metal: "24K Gold", price: 1258.9 },
//     { metal: "Platinum", price: 795.45 },
//     { metal: "Palladium", price: 1241.0 }
// ]

// const diamonds = [
//     { carets: 0.5, price: 405 },
//     { carets: 0.75, price: 782 },
//     { carets: 1, price: 1470 },
//     { carets: 1.5, price: 1997 },
//     { carets: 2, price: 3638 }
// ]

// const ringStyles = [
//     { style: "Classic", price: 500 },
//     { style: "Modern", price: 710 },
//     { style: "Vintage", price: 965 }
// ]

// const createCustomRing = (style, carets, metal) => {
//     return {
//         style: style.style,
//         carets: carets.carets,
//         metal: metal.metal,
//         price: metal.price + style.price + carets.price
//     }
// }

// const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
// console.log("ring test", newRingOrder)

// // console log returns object with undefined info since there's no data for the function to refer to

// const createDoctorInfo = (name, specialty, address) => {
//     return {
//         name: name,
//         specialty: specialty, 
//         address: address
//     }
// }
// const doctors = [];
// const myNewDr = createDoctorInfo("Jeff", "QuackJob", "Here, there, everywhere");
// console.log("test2", myNewDr)

// pet factory function

// const createPet = (name, breed) => {
//     return {
//         name: name,
//         breed: breed
//     }
// }
// const myNewPet = createPet("Snuffles", "Persian")
// console.log("myCat", myNewPet)

// practice exercises

const jumpStartRecords = []
const chattenRecords = []
const polarRecords = []

const createFunkRapArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const createCountryBluegrassArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const createPopArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}
jumpStartRecords.push(createFunkRapArtist("Dre Funkz", 25));
jumpStartRecords.push(createFunkRapArtist("Dusta Grimes", 21));
jumpStartRecords.push(createFunkRapArtist("Loyonce Branis", 27))
chattenRecords.push(createCountryBluegrassArtist("Bruce Atikins", 23))
chattenRecords.push(createCountryBluegrassArtist("Bartholomew Canielson", 23));
chattenRecords.push(createCountryBluegrassArtist("Avilee Dallas", 19));
polarRecords.push(createPopArtist("Jensen Brown", 20));
polarRecords.push(createPopArtist("Austin Kinkaid", 22));
console.log("array test", jumpStartRecords);
console.log("array test", chattenRecords);
console.log("array test", polarRecords);