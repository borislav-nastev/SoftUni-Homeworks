function extensibleObject() {

    const myObj = {

        extend: function (template) {

            for (const key in template) {

                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(myObj)[key] = template[key];

                } else {
                    myObj[key] = template[key];
                }
            }
        }
    }

    return myObj;
}

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
};

const obj = extensibleObject();
obj.extend(template);