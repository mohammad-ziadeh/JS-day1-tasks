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
  document.getElementById("age").innerHTML = x < 30 && x > 18;
}
{
  let x = 1,
    y = 3 ** 2;
  document.getElementById("expo").innerHTML = y - x;
}
{
  let x = 10,
    y = 4;
  document.getElementById("remain").innerHTML = x % y;
}

// x = 10;
// y = 20;

// console.log(" x = ", x, " y = ", y);
// x = x + y; // 30
// y = x - y; // 10
// x = x - y; // 20
// console.log(" x = ", x, " y = ", y);

// dov
