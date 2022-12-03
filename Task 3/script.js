const calculateTemp=()=>{
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);

    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel*9/5) + 32);
        return Fahrenheit;
    }

    const fahToCel = (fah) => {
        let Celsius = Math.round((fah - 32) * 5/9);
        return Celsius;
    }

    var result;
    if(valueTemp=='cel')
    {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} Fahrenheit`;
    }
    else
    {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} Celsius`;
    }





    // http://127.0.0.1:5500/TemperartureConverter.html?temp=5&temp_diff=cel&temp=Submit
}
 