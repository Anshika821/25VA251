function saveData()
{
    localStorage.setItem("name", "Anshika");

    alert("Data Saved");
}

function getData()
{
    let name = localStorage.getItem("name");

    alert("Name: " + name);
}