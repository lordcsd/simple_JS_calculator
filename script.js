function display(val)
{
    document.getElementById("enter").value += val
}

function solve()
{
    let x = document.getElementById("enter").value
    let y = eval(x)
    document.getElementById("enter").value = y
}

function clr()
{
    document.getElementById("enter").value = ('')
}