let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`

let append = document.querySelector('.append');

function getMovies(el) {
    fetch(el)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            showMovies(data.results)
        })
        .catch(error => console.error(error))
}

function showMovies(movies) {
    append.innerHTML = '';
    movies.forEach(movie => {
        let movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="orange">${movie.vote_average}</span>
            </div>
            <span class="date">${movie.release_date}</span>
        `;
        append.appendChild(movieElement);
    });
}

document.querySelectorAll('.btns').forEach(button => {

    button.addEventListener('click', () => {
        if (button.value === 'top_rated') getMovies(tokenTop)
        else if (button.value === 'popular') getMovies(tokenPopular)
    })
})

getMovies(tokenTop);
