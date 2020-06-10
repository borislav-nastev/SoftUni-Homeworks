function attachEventsListeners() {

    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    const inputType = document.getElementById('inputUnits');
    const outputType = document.getElementById('outputUnits');

    document.getElementById('convert').addEventListener('click', convertData);

    function convertData() {

        const selectedInputOption = inputType.options[inputType.selectedIndex].value;
        const selectedOutputOption = outputType.options[outputType.selectedIndex].value;
        const inputValue = input.value;

        const valueToMeters = convertValueToMeters(inputValue, selectedInputOption);
        const metersToValue = convertMetersToValue(valueToMeters, selectedOutputOption);

        output.value = metersToValue;
    }

    function convertValueToMeters(value, valueType) {

        const helpers = {
            'km': x => x * 1000,
            'm': x => x * 1,
            'cm': x => x * 0.01,
            'mm': x => x * 0.001,
            'mi': x => x * 1609.34,
            'yrd': x => x * 0.9144,
            'ft': x => x * 0.3048,
            'in': x => x * 0.0254
        }

        return helpers[valueType](value);
    }

    function convertMetersToValue(meters, valueType) {

        const helpers = {
            'km': x => x * 0.001,
            'm': x => x * 1,
            'cm': x => x * 100,
            'mm': x => x * 1000,
            'mi': x => x * 0.000621371192,
            'yrd': x => x * 1.0936133,
            'ft': x => x * 3.2808399,
            'in': x => x * 39.37008,
        }

        return helpers[valueType](meters);
    }
}