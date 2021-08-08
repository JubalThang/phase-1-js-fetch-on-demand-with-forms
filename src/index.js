const init = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', e => {
      e.preventDefault()
      searchByMVId(e)
  })
}

function searchByMVId(e){
  
    const searchID = e.target.searchByID.value
    // console.log(e.target.children[1].value) 0 is label 1 is input
    // fetch('http://localhost:3000/movies')
    // .then(res => res.json())
    // .then(movies => movies.find(movie.id === e.target.searchByID.value => console.log('Title:', movies))
    // .then(movies => console.log(movies.find(movie => movie.id === searchID)))
    // .catch(err => console.error('error occer', err))

    fetch(`http://localhost:3000/movies/${searchID}`)
    .then(res => res.json())
    .then(movie => foundMovie(movie))
    .catch(err => console.error('Error Occer: ',err))
}

function foundMovie(mv) {
    document.querySelector('section#movieDetails h4').textContent = mv.title
    document.querySelector('section#movieDetails p').textContent = mv.summary
}
document.addEventListener('DOMContentLoaded', init);