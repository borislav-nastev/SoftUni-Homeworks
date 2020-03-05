function worldRecord(input) {

    let recordInSeconds = Number(input.shift());
    let distance = Number(input.shift());
    let timeForOneMeter = Number(input.shift());

    let timeForAllDistance = distance * timeForOneMeter;
    let moreSeconds = Math.floor(distance / 15) * 12.5;
    let totalTime = timeForAllDistance + moreSeconds;

    let needTime = Math.abs(recordInSeconds - totalTime);

    if (recordInSeconds > totalTime) {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
        
    } else {

        console.log(`No, he failed! He was ${needTime.toFixed(2)} seconds slower.`);
    }

}

worldRecord([55555.67, 3017, 5.03]);