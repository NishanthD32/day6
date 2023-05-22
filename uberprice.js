class Uper{
    constructor(perMinute,perKilomiter,surgeMultiplier){
        this. perMinute = perMinute;
        this. perKilomiter = perKilomiter;
        this.surgeMultiplier = surgeMultiplier;

    }
    calculate(distanceInKilometers, durationInMinutes, isSurgeActive){
        let price = 0;

        price += distanceInKilometers * this.perKilomiter;
        price += durationInMinutes * this.perMinute;

        if (isSurgeActive){
            price *= this.surgeMultiplier;
        }

        return price;
    }
}
let drive =  new Uper(6,10,2);

const distance = 5; 
const duration = 20; 
const isSurgeActive = true;

const price = drive.calculate(distance, duration, isSurgeActive);
console.log(` Uber price is: ${price.toFixed(2)}`);