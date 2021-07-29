
// fetch('https://randomuser.me/api/?results=20')
// .then((response) => {
//     return response.json()
// })
// .then((results) => {
//     return results
//     });

async function getResults('https://randomuser.me/api/?results=20'){
const response = await fetch('')
const json = await response.json()
return json
}
getResults()

getResults()
.then((data) => {
    return console.log(data)
})


































































// async function buyPotatoes(){
//    return new Promise(resolve => setTimeout(() =>{resolve('картошка')}, Math.random() * 1000))
// }

// function getMashPotatoes(product){
//     if(product){
//         return 'картошка пюре'
//     }else{
//         throw new Error('картошки нет')
//     }
 
// }

// buyPotatoes()
// .then((smth) => {
//  getMashPotatoes(smth)
//  return undefined;
// })
// .then((pureshka) =>{
//    console.log(pureshka)
// })

// fetch('https://dog.ceo/api/breeds/image/random')

// .then((response) => {
//     return response.json()
// })

// .then((data) => {
//     return data.message
// })

// .then ((image) => {
//     let photo = document.createElement('img');
//     photo.src = image;
//     document.querySelector('body').appendChild(photo)
// })