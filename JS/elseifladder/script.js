function checkGrade()
{
    let marks = prompt("Enter your marks:");

    if(marks >= 90)
    {
        alert("Grade A");
    }
    else if(marks >= 75)
    {
        alert("Grade B");
    }
    else if(marks >= 60)
    {
        alert("Grade C");
    }
    else if(marks >= 40)
    {
        alert("Grade D");
    }
    else
    {
        alert("Fail");
    }
}