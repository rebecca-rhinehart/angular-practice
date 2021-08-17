// function fetchData() {
//     fetch('https://pokeapi.co/api/v2/nature')
//     .then(response => {
//         //this checks if the response request is good or not, you need this for the .catch statement to work
//         if(!response.ok) {
//             throw Error('ERROR')
//         }
//         return response.json()
//     })
//     .then(data => {
//         //.results gives us the array we want
//         console.log(data)
//         console.log(data.results)
//         let app = document.querySelector('#app')
//         const names = data.results.map(result => {
//             return `<p> Name: ${result.name} </p>`
//         }).join("")
//         app.innerHTML = names
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }
// fetchData();

document.getElementById("button").addEventListener('click', () => {
    fetch('http://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
        if(!response.ok) {
            throw Error("Error")
        }
        return response.json()
    })
    .then(data => {
        document.getElementById('word').innerHTML = `<h1>${data}</h1>`;
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${data}`)
            .then(response => {
                console.log(response)
                if(!response.ok) {
                    throw Error("ERROR")
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('definition').innerHTML = '';
                console.log(data)
                data.map(a => {
                    if(a.meanings.length === 0) {
                        console.log('hey')
                        document.getElementById('definition').innerHTML = 'word is in the system but DEFINITION CANNOT BE FOUND';
                    }
                    a.meanings.map(meaning => {
                        meaning.definitions.map(def => {
                            let string = document.getElementById('definition').innerHTML
                            document.getElementById('definition').innerHTML = string + `<p>${def.definition}</p>`;
                            
                        })
                    })
                })
            })
            .catch(err => {
                document.getElementById('definition').innerHTML = "definition cannot be found"
            })
    }) 
    .catch(err => {
        document.getElementById('word').innerHTML = `<h1 style="font-size: 100px;"> ${err} </h1>`
    })
    
})



   

// let promise = new Promise((resolve, reject) => {
//     let hello = 1 * 3;
//     if(hello === 4) {
//         resolve('hello')
//     } else {
//         reject('hi')
//     }
// })

// let promise1 = async () => {
//     try {
//         let value = await promise
//     } catch(err) {
//         console.log(err)
//     }
    
//     let hello = 1 * 3;
//     if(hello === 3) {
//         return 'hello'
//     } else {
//         throw 'hi'
//     }
// }



// const onFulfillment = (hello) => {
//     console.log(hello)
// }
// const onRejection = (hi) => {
//     console.log(hi)
// }
// promise1().then(onFulfillment)

// promise.then(onFulfillment)
// .catch(onRejection)