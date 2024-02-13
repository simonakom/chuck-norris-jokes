const p = document.querySelector("p");
const btn = document.querySelector("button");
const url = "https://api.chucknorris.io/jokes/random";

// function getJoke(){
//     fetch(url)
//     .then(res => res.json())
//     .then(data=>p.innerHTML = data.value);
// }

const getJoke = async () => {
    const promise = await fetch("https://api.chucknorris.io/jokes/random")
    const response = await promise.json()
    return p.innerHTML = response.value
}

btn.addEventListener("click", getJoke);

