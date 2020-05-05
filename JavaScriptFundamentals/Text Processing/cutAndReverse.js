function cutAndReverse(text) {

    let halfStringLength = text.length / 2;

    let firstPart = text.substr(0, halfStringLength)
        .split("")
        .reverse()
        .join("");

    let secondPart = text.substring(halfStringLength)
        .split("")
        .reverse()
        .join("");

    console.log(firstPart);
    console.log(secondPart);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');