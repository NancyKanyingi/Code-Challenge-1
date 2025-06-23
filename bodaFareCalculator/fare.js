const prompt  = require("prompt-sync")();

let distanceInKm = prompt(Number("Unafika wapi Mkubwa? Kilometer ngapi?"))
let baseFare = 50;
let chargePerKm = 15;

let totalFare = baseFare + (chargePerKm * distanceInKm)

console.log(`Uko kwote? Io ni ${distanceInKm} km:
    Ukikalia Pikipiki: KES ${baseFare},
    Mpaka Uko: KES ${chargePerKm * distanceInKm},
    Total: KES ${totalFare}

"Panda Pikipiki!"`)

