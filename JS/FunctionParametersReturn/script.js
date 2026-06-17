function square(num)
{
    return num * num;
}

function calculateSquare()
{
    let number = Number(prompt("Enter a number:"));

    let result = square(number);

    alert("Square = " + result);
}