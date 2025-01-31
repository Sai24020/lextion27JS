console.log("koden är länkad");
const BASE_URL = "https://ghibliapi.vercel.app/people/";

// få data från API:et
async function fetchMovies() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();

        // ändra i varje filmobjekt, så den får review och rating
        // loopa över listan
        data.forEach(movie => {
            movie.seen = false;
            movie.rating = 0;
            movie.review = "";
        });
        // spara svaret från API till LS
        localStorage.setItem("all_movies", JSON.stringify(data));
    }
    catch (error) {
        console.error(error);
    }
};

function checkMovies() {
    // kolla om det redan finns filmer i LS
    const all_movies = JSON.parse(localStorage.getItem("all_movies"));
    if (all_movies) {
        // i så fall: rendera från LS
        renderMoviesToUI(all_movies);
    } else {
        // annars hämta data från API
        fetchMovies();
        const updated_all_movies = JSON.parse(localStorage.getItem("all_movies"));
        renderMoviesToUI(updated_all_movies);
    }
};
checkMovies();

// rendera från LS till mitt UI
function renderMoviesToUI(movies) {
    console.log(movies);
    const moviesContainerEl = document.getElementById('movies-container');
    movies.forEach((movie) => {
        const movieEl = document.createElement("article");
        movieEl.innerHTML = `
        <figure style="height: 150px; width: 250px; margin-top: 3rem; background-image: films.url(${movie.image})" role= "img" aria-label="Movie poster for ${movie.title}">
        <figcaption style="background-color: black; margin-bottom: 3rem;">
            <label for="${movie.films.id}">Like people ( ${movie.name} ) </label>
            <input class="like-checkbox" id="${movie.name}" type="checkbox" ${movie.liked ? "checked" : ""}>
            <p class="movie-container__rtScore">Kön: ${movie.gender} och Ålder: ${movie.age}</p>
        </figcaption>
        </figure>
        <h4 class="movie-container__name">Name: ${movie.name}</h4>
        <p class="movie-container__eyeC"> Eye Color: ${movie.eye_color}</p>
        <p class="movie-container__hairC"> Hair color: ${movie.hair_color}</p>
       
        <a class="movie-container__like"> Film länk: ${movie.films}</a>
        
        `;
        // till sist lägger vi till nya elementet i vår HTML
        moviesContainerEl.appendChild(movieEl);
    });
};