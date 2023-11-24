let btn = document.querySelector('[data-convert]')



btn.addEventListener('click', function(){
    convertToHex()
})
function convertToHex() {
    // Get the RGB input value and remove spaces
    const rgbInput = document.getElementById('rgbInput').value.replace(/\s/g, '');

    // Validate the input format (3 or 6 comma-separated values)
    const rgbArray = rgbInput.split(',');

    if (rgbArray.length === 3 || rgbArray.length === 6) {
        // Convert each RGB value to hexadecimal
        const hex = rgbArray.map(value => {
            const hex = Number(value).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        });

        // Join the hexadecimal values and display the result
        const hexvalue = '#' + hex.join('');
        document.getElementById('result').innerText = 'Hex Color: ' + hexvalue;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').innerText = 'Invalid RGB input';
    }
}