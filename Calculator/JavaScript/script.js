function display(val)
{
    document.getElementById("result").value += val;
}
function clr()
{
    document.getElementById("result").value = "";
}
function Calc()
{
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}