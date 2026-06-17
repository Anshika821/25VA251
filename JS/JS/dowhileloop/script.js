function printNumbers()
{
    let i = 1;
    let result = "";

    do
    {
        result += i + "\n";
        i++;
    }
    while(i <= 10);

    alert(result);
}