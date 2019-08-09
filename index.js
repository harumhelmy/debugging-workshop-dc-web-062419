document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  let joke

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {"Accept": "application/json"}
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }
  
  fetchJoke()

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById("name-input").value

    if(!username === "") return;
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
      `
    jokeList.appendChild(newJokeLi);

    fetchJoke()
  })

  



    

})

  
  