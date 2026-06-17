function getUsers()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>
    {
        let result = "";

        data.forEach(user =>
        {
            result += user.name + "\n";
        });

        alert(result);
    });
}