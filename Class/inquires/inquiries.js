let apiData = fetch("https://jsonplaceholder.typicode.com/users");

apiData
  .then((response) => response.json())
  .then((json) => {
    json.map((person) => {
      arr.push(person);
    });
  });

const arr = [];
const addInfoBtn = document.getElementById("add-info-btn");
const mainTableElement = document.getElementById("table-main");

/**
 * creates rows for every person data.
 * adds person info to every row.
 */
fillInfo = () => {
  // loop for creating and adding info to the table
  for (const person of arr) {
    const name2 = document.createElement("tr");
    name2.innerHTML = `
     <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
  `;

    const fullName = name2.firstElementChild;
    const userName = fullName.nextElementSibling;
    const email = userName.nextElementSibling;
    const website = email.nextElementSibling;

    fullName.textContent = person.name;
    userName.textContent = person.username;
    email.textContent = person.email;
    website.textContent = person.website;
    mainTableElement.appendChild(name2);
  }
};


//fills table with data. 

setTimeout(() => {
    if (mainTableElement.childElementCount >= arr.length) {
        return;
      }
    fillInfo();
}, 100);


