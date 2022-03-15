import { validCarList } from "../data/SeedData";

const validateCar = (car) => {

    if (!(car.year >= 1900 && car.year <= 2100)) {
        return false;
    }
    var result = false
    validCarList.forEach((validCar) => {
        if (car.make.toLowerCase() === validCar.make.toLowerCase() &&
            car.year >= validCar.yearBegin &&
            car.year <= validCar.yearEnd) {
                result = true;
            return;
        }
    })
    return result;
}

export default validateCar;