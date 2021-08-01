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
    thr.appendChild(th);
  }

  thead.appendChild(thr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let j = 0; j < rows; j++) {
    const tr = document.createElement("tr");

    for (let i = 0; i < cols; i++) {
      const td = document.createElement("td");
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
