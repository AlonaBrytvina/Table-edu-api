async function getResults(quantity) {
  const response = await fetch(
    `https://randomuser.me/api/?results=${quantity}`
  );
  const json = await response.json();
  return json;
}
const tableContainer = document.querySelector(".tableContainer");

document.querySelector(".buttonGet").onclick = function () {
  const quantity = document.querySelector(".textField").value;

  getResults(quantity).then((data) => {
    createTable(tableContainer, data.results, 4);
  });
};

document.querySelector(".buttonDelete").onclick = function () {
  tableContainer.innerHTML = "";
};

function createTable(parent, arr, cols) {
  const rows = arr.length;
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const thr = document.createElement("tr");

  for (let i = 0; i < cols; i++) {
    const th = document.createElement("th");

    switch (i) {
      case 0:
        th.innerHTML = "Photo";
        break;
      case 1:
        th.innerHTML = "Name";
        break;
      case 2:
        th.innerHTML = "Age";
        break;
      case 3:
        th.innerHTML = "From";
        break;
    }

    // if (i == 0) {
    //   th.innerHTML = "photo";
    // } else if (i == 1) {
    //   th.innerHTML = "name";
    // } else if (i == 2) {
    //   th.innerHTML = "age";
    // } else {
    //   th.innerHTML = "from";
    // }
    thr.appendChild(th);
  }

  thead.appendChild(thr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let user of arr) {
    const tr = document.createElement("tr");

    for (let i = 0; i < cols; i++) {
      const td = document.createElement("td");

      switch (i) {
        case 0:
          const img = document.createElement("img");
          img.src = user.picture.large;
          td.appendChild(img);
          break;
        case 1:
          const { title, first, last } = user.name;
          td.innerHTML = `${title} ${first} ${last}`;
          break;
        case 2:
          td.innerHTML = user.dob.age;
          break;
        case 3:
          const { country, city } = user.location;
          td.innerHTML = `${country}, ${city}`;
          break;
      }
      // its for me
      // if (i == 0) {
      //   const img = document.createElement("img");
      //   img.src = user.picture.large;
      //   td.appendChild(img);
      // } else if (i == 1) {
      //   td.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;
      // } else if (i == 2) {
      //   td.innerHTML = user.dob.age;
      // } else {
      //   td.innerHTML = `${user.location.country}, ${user.location.city}`;
      // }

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  parent.appendChild(table);
}
// its for me
//      const table = document.createElement('table');

//      for (let i=0; i < rows; i++){
//          const tr = document.createElement('tr')

//         for (let j=0; j < cols; j++){
//             const td = document.createElement('td')
//             tr.appendChild(td);

//         }

//         table.appendChild(tr)
//      }

//      parent.appendChild(table)
//  }
