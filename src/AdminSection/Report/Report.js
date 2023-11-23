const token = JSON.parse(localStorage.getItem("token")) || [];
const body = document.getElementById("bodye");
const url = "https://wandering-alkaline-shrew.glitch.me/freelancers";
body.innerHTML = ``;
let totalnumber;

let data;
window.addEventListener("DOMContentLoaded", async () => {
  if (token.length <= 0) {
    window.location.href = "/src/AdminSection/loginPage/login.html";
    alert("Please Login First ");

    await gettingdatafetch();
  }
});

async function display() {
  console.log(totalnumber);
  const ans = ` <h1>A total number of registered freelancers : ${totalnumber}</h1>
    <h1>Number of freelancers per profession.</h1>
    <h2>Student</h2>
    <h2>Web devloper</h2>
    <h2>Graphic Disigner</h2>
    <h1>Average hourly rate of the freelancers.</h1>
    <h1>No. of Booked and Available freelancers</h1>
    <h3>Boked </h3>
    <h3>Avalilable</h3>`;

  body.innerHTML = ans.join("");
}
async function gettingdatafetch() {
  try {
    const respoce = await fetch(url);

    data = await respoce.json();
    console.log(data);
    totalnumber = data.length;
    await display();
  } catch (error) {
    console.log(error);
    alert("something went wrong please reload");
  }
}
