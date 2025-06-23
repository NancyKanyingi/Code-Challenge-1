const prompt  = require("prompt-sync")();

let baseFareInKm = prompt(Number("Unafika wapi Mkubwa? Kilometer ngapi?"))
let _distance  = prompt(Number("ukoWote? Io ni"))
let _standardFare = ukikaliaPikipiki=50
let _destination = mpakaUko=(15 * baseFareInKm)
let _fare =Total=(50 + (15 * baseFareInKm))

console.log(`distance:${_distance},
    standardFare:${_standardFare},
    destination:${_destination},
    fare:${_fare}

"Panda Pikipiki!"`)
