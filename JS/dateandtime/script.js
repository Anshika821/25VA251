function showDateTime()
{
    let today = new Date();

    alert(
        "Date: " + today.getDate() +
        "\nMonth: " + (today.getMonth() + 1) +
        "\nYear: " + today.getFullYear() +
        "\nHours: " + today.getHours() +
        "\nMinutes: " + today.getMinutes()
    );
}