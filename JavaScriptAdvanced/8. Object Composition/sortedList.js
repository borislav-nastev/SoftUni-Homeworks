function sortedList() {

    let list = [];

    const helpers = {
        size: 0,
        
        add: function (el) {
            list.push(el);
            list.sort((a, b) => a - b);
            return this.size = list.length;
        },

        remove: function (index) {
            if (index < list.length && index >= 0) {
                list.splice(index, 1);
            }

            return this.size = list.length;
        },

        get: function (index) {
            if (index < list.length && index >= 0) {
                return list[index];
            }
        },
    }

    return helpers;
}
