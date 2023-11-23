const url = "https://wandering-alkaline-shrew.glitch.me/freelancers";

async function registerform() {
  const name = document.getElementById("name").value;
  const profile = document.getElementById("profile").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const profession = document.getElementById("profession").value;
  let skills = document.getElementById("skills").value;
  const hourly_rate = document.getElementById("hourly_rate").value;

  const id = Date.now();
  const isBooked = false;

  skills = skills.trim().split(" ");
  let obj = {
    id,
    name,
    email,
    password,
    profession,
    skills,
    hourly_rate,
    profile_picture: profile,
    isBooked,
  };
  try {
    const respoce = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    const data = await respoce.json();
    console.log(data);

    alert("Successfully registered.");
  } catch (error) {
    console.log(error);
    alert("something went wrong please wait");
  }
}
