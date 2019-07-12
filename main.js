// const user = {};

// fetch("url")
// .then(res => res.json())
// .then(res => {
//     res.forEach(element => {

//     });
// })

// function wyswietlanie(data) {
//     data.forEach(element => {

//     });
// }
let idUser = ''

let mainDiv = document.getElementById('mainDiva')
function getIdUser() {
    
    const idUser = document.getElementsByClassName('idUser')[0].value
    


    if (idUser > 0 && idUser <= 10) {
        fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
            .then(res => res.json())
            .then(res => {
                console.log(res)

                mainDiv.innerHTML = ''
                
                let paraName = document.createElement('p')
                let paraUsername = document.createElement('p')
                let paraEmail = document.createElement('p')
                let paraStreet = document.createElement('p')
                let paraPhone = document.createElement('p')
                paraName.innerHTML = "<p id='mainID1'>" + res.name + "</p>"
                paraUsername.innerHTML = "<p id='mainID2'>" + res.username + "</p>"
                paraEmail.innerHTML = "<p id='mainID3'>" + res.email + "</p>"
                paraStreet.innerHTML = "<p id='mainID4'>" + res.address.street + "</p>"
                paraPhone.innerHTML = "<p id='mainID5'>" + res.phone + "</p>"
                mainDiv.appendChild(paraName)
                mainDiv.appendChild(paraUsername)
                mainDiv.appendChild(paraEmail)
                mainDiv.appendChild(paraStreet)
                mainDiv.appendChild(paraPhone)
                document.body.appendChild(mainDiv)

            })
            .catch(error => console.error(error));






    } else {
        alert('zła liczba!' + ' ' + idUser)
    }

document.getElementById('mainDiva').style.display = "block"
document.getElementById('mainDiva').style.animation = "rotate-center 5s linear 2"
document.getElementById('mainDiva').style.animationDelay = "1s"

}