const url = "https://reqres.in/api/login";
const token = JSON.parse(localStorage.getItem("token")) || [];

async function loginSubmit() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const obj = { email, password };

  console.log(obj);

  try {
    const respoce = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    const data = await respoce.json();
    console.log(data);
    localStorage.setItem("token", JSON.stringify(data.token));
    alert("Login Successfull ");
  } catch (error) {
    console.log(error);
    alert("something went wrong please wait");
  }
}
