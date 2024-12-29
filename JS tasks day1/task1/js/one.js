{
  let x = 1000,
    y = 500;
  document.getElementById("cash").innerHTML = x / y;
  document.getElementById("net1").innerHTML = x - y;
  document.getElementById("total").innerHTML = x + y;
  document.getElementById("net2").innerHTML = x * y;
}
{
  let x = 7,
    y = 9,
    z = 2;
  document.getElementById("aver").innerHTML = (x + y + z) / 3;
}
{
  let x = 150,
    y = 30 / 100;
  document.getElementById("dis").innerHTML = x - x * y;
}
{
  let x = 20;
  document.getElementById("age").innerHTML = 18 < x < 30;
}
{
  let x = 1 ** 2,
    y = 2 ** 3;
  document.getElementById("expo").innerHTML = x * y;
}
// {
//   let x = 100,
//     y = 200;
//   document.getElementById("remain").innerHTML = y * (x / y) === x;
// }
{
  let x = 100,
    y = 200;
  document.getElementById("ammro").innerHTML = y * (x / y) === x;
}
