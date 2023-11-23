const main = document.getElementById("main-container");
let data;
main.innerHTML = ``;

const token = JSON.parse(localStorage.getItem("token")) || [];

const url = "https://wandering-alkaline-shrew.glitch.me/freelancers";
window.addEventListener("DOMContentLoaded", async () => {
  if (token.length <= 0) {
    window.location.href = "/src/AdminSection/loginPage/login.html";
    alert("Please Login First ");
  }
  await gettingdatafetch();

  await display();
});

async function gettingdatafetch() {
  try {
    const respoce = await fetch(url);

    data = await respoce.json();
    console.log(data);
    await display();
  } catch (error) {
    console.log(error);
    alert("something went wrong please reload");
  }
}

async function sortByHoureRate() {
  try {
    const respoce = await fetch(`${url}?_sort=hourly_rate&_order=asc`);

    data = await respoce.json();
    // console.log(data);
    await display();
  } catch (error) {
    console.log(error);
    alert("something went wrong please reload");
  }
}
async function sortbyProfession() {
  const sort = document.getElementById("sort-profession").value;
  console.log(sort);
  try {
    const respoce = await fetch(`${url}?profession=${sort}`);

    data = await respoce.json();
    // console.log(data);
    await display();
  } catch (error) {
    console.log(error);
    alert("something went wrong please reload");
  }
}
async function searchByName() {
  const sort = document.getElementById("search-by-name").value;
  console.log(sort);
  try {
    const respoce = await fetch(`${url}?q=${sort}`);

    data = await respoce.json();
    // console.log(data);
    await display();
  } catch (error) {
    console.log(error);
    alert("something went wrong please reload");
  }
}

function display() {
  const datamap = data.map((item) => {
    return ` <div class="card">
        <div class="card-img">
          <img
          src="${item.profile_picture}"
      
            width="200px"  
            alt="https://placehold.co/200x200" />
        </div>
        <div class="card-info">
          <h2>name: ${item.name}</h2>
          <h4>email: ${item.email}</h4>
          <h4>Profession: ${item.profession}</h4>
          <h4>Skills:${item.skills.join(",")}</h4>
          <h4>Hourly Rate:$ ${item.hourly_rate}</h4>
          <h4>Booking Status:${item.isBooked}</h4>
          <button class="warning-btn">Edit</button>
          <button class="denger-btn" onclick="handleDelete('${
            item.id
          }')">Delete</button>
        ${
          item.isBooked
            ? ` <button class="succsess-btn"
          disabled onclick="hireMe('${item.id}')">Hire me</button>`
            : ` <button class="succsess-btn"
           onclick="hireMe('${item.id}')">Hire me</button>`
        }
        </div>
      </div>
        `;
  });

  //   datamap = datamap.join("");
  main.innerHTML = datamap.join("");
}

async function hireMe(id) {
  obj = {
    isBooked: true,
  };
  try {
    const respoce = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const data = await respoce.json();

    gettingdatafetch();
  } catch (error) {
    console.log(error);
    alert("something went wrong please again");
  }
}
async function handleDelete(id) {
  try {
    const respoce = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await respoce.json();
    console.log(data);
    gettingdatafetch();
  } catch (error) {
    console.log(error);
    alert("something went wrong please again");
  }
}
