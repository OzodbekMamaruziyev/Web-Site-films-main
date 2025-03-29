const API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'
const tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
const tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`

let move = {
    top_rated: tokenTop, popular: tokenPopular, upcoming: tokenUpComing
}

let addMove = document.querySelector('.append')

let div = document.createElement('div')

// 
document.getElementById('top').addEventListener('click',() => 
    moves('top_rated'))
document.getElementById('popular').addEventListener('click', () => 
    moves('popular'))

document.getElementById('upcoming').addEventListener('click', () => 
    moves('upcoming'))






let moves = async (el) =>{

    const response = await fetch(move[el]);
    const data = await response.json();
    renderMovies(data.results);
}

let renderMovies = (movies) => {
    addMove.innerHTML = ''

    movies.forEach(movie => {
        
        div = document.createElement('div')
        div.classList.add('movie')
        
        div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="orange">${movie.vote_average}</span>
            </div>
            <span class="date">${movie.release_date}</span>
        `
        
        addMove.appendChild(div);
    });
};


moves('top_rated');
