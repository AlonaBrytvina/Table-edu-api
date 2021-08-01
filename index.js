async function getResults(quantity) {
  const response = await fetch(
    `https://randomuser.me/api/?results=${quantity}`
  );
  const json = await response.json();
  return json;
}
const elem = document.querySelector(".elem");

document.querySelector(".buttonGet").onclick = function () {
  const url = document.querySelector(".textButton").value;
  console.log(url);
  getResults(url).then((data) => {
    console.log(data);
    let arr = data.results;
    createTable(elem, arr);
  });
};

document.querySelector(".buttonDelete").onclick = function () {
  elem.innerHTML = "";
};

function createTable(parent, arr) {
  const cols = 4;
  const rows = arr.length;
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const thr = document.createElement("tr");

  for (let i = 0; i < cols; i++) {
    const th = document.createElement("th");

    switch (i) {
      case 0:
        th.innerHTML = "photo";
        break;
      case 1:
        th.innerHTML = "name";
        break;
      case 2:
        th.innerHTML = "age";
        break;
      case 3:
        th.innerHTML = "from";
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
    console.log(user);
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
          td.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;
          break;
        case 2:
          td.innerHTML = user.dob.age;
          break;
        case 3:
          td.innerHTML = `${user.location.country}, ${user.location.city}`;
          break;
      }

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
