

async function getResults(){
const response = await fetch('https://randomuser.me/api/?results=20')
const json = await response.json()
return json
}

// getResults()
// .then((data) => {
//     console.log(data);
//     let arr = data.results;
//     console.log(arr)
// })

document.querySelector('.buttonGet').onclick = function(){
    const url = document.querySelector('.textButton').value
    console.log(url)
    getResults()
    .then((data) => {
        console.log(data);
        let arr = data.results;
        console.log(arr)
    })
}