function Spy(object, method) {

    let func = object[method];
    let result = { 'count': 0 };

    object[method] = function () {
        result.count++;
        return func.apply(this, arguments);
    }

    return result;
}

let obj = {
    method: () => "invoked"
}

let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy);
