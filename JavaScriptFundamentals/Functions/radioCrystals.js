function radioCrystals(arr) {

    let targetVal = arr.shift();
    let xRayCounter = 1;

    for (let element of arr) {

        let currentVal = element;
        let counterCut = 0;
        let counterLap = 0;
        let counterGrind = 0;
        let etchCounter = 0;

        console.log(`Processing chunk ${currentVal} microns`);

        while (currentVal > targetVal) {

            if (currentVal / 4 >= targetVal - 1) {
                currentVal = cut(currentVal);
                counterCut++;

                if (currentVal / 4 < targetVal - 1) {
                    print("Cut", counterCut);
                }

            } else if (currentVal * 0.80 >= targetVal - 1) {
                currentVal = lap(currentVal);
                counterLap++;

                if (currentVal * 0.80 < targetVal - 1) {
                    print("Lap", counterLap);
                }

            } else if (currentVal - 20 >= targetVal - 1) {
                currentVal = grind(currentVal);
                counterGrind++;

                if (currentVal - 20 < targetVal - 1) {
                    print("Grind", counterGrind);
                }

            } else if (currentVal - 2 >= targetVal - 1) {
                currentVal = etch(currentVal);
                etchCounter++;

                if (currentVal - 2 < targetVal - 1) {
                    print("Etch", etchCounter);
                }
            }
        }

        if (currentVal !== targetVal) {
            currentVal = xRay(currentVal);
            console.log(`X-ray x${xRayCounter}`);
        }

        console.log(`Finished crystal ${currentVal} microns`);
    }

    function print(text, counter) {
        console.log(`${text} x${counter}\nTransporting and washing`);
    }

    function cut(val) {
        return val / 4;
    }

    function lap(val) {
        return val = Math.trunc(val - (val * 0.20));
    }

    function grind(val) {
        return val - 20;
    }

    function etch(val) {
        return val - 2;
    }

    function xRay(val) {
        return val + 1;
    }
}

radioCrystals([1000,
    4000,
    8100]);