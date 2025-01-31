const API_URL = "";

const fetchMovies = async() => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP-error, status code: ${response.status}`);
        }
        //behöver inte else
        const movies = await response.json();
        console.log(movies);
        addLikedKeyToMovie(movies);
    } catch (error) { 
         console.error("An error came up: ", error)
    }
};

//fetchMovies();

const addLikedKeyToMovie = (movies) => {
 //   console.log(movies);
 //   const uppdatedMoviesList = movies.map((movie) => movie.liked = false);
// console.log(uppdatedMoviesList);
   movies.map((movie) => movie.liked = false);
   localStorage.setItem("movies", JSON.stringify(movies));
};



const renderMoviesToUI = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);

const moviesContainerEl = document.getElementById("movies-container");
    movies.forEach(movie => {
        const movieEl = document.createElement("article");
        movieEl.innerHTML = `
        <figure style="height: 500px; width: 600px; margin-top: 3rem; background-image: films.url(${movie.image})" role= "img" aria-label="Movie poster for ${movie.title}">
        <figcaption style="background-color: black; margin-bottom: 3rem;">
            <label for="${movie.id}">Like people ( ${movie.name} ) </label>
            <input class="like-checkbox" id="${movie.id}" type="checkbox" ${movie.liked ? "checked" : ""}>
            <p class="movie-container__rtScore">Kön: ${movie.gender} och Ålder: ${movie.age}</p>
        </figcaption>
        </figure>
        <h4 class="movie-container__name">Name: ${movie.name}</h4>
        <p class="movie-container__eyeC"> Eye Color: ${movie.eye_color}</p>
        <p class="movie-container__hairC"> Hair color: ${movie.hair_color}</p>
        <p class="movie-container__like"> Films länk: ${movie.films}</p>
        
        `;
        moviesContainerEl.appendChild(movieEl);
    });

   const likeCheckboxes = document.querySelectorAll(".like-checkbox");
   console.log(likeCheckboxes);
   likeCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const moviesFormLS = JSON.parse(localStorage.getItem("movies"));
            const id = event.target.id;
            //console.log(id);
            const movie = movies.find(m => m.id === id);
            if (movie) {
                movie.liked = !movie.liked;
          //      console.log(movie);
          //      console.log(movieFormEl);
          const index = moviesFormLS.findIndex(m => m.id === id);
          console.log(index);

          moviesFormLS.splice(index, 1, movie);
          console.log(moviesFormLS);
          localStorage.setItem("movies", JSON.stringify(moviesFormLS));

            } else {
                console.log(`Movie with id ${id} not found`);
            }

    });
   });
};

const initApp = () => {
    if (localStorage.getItem("movies")) {
        renderMoviesToUI();
    } else {
        fetchMovies();
    }
};
initApp();

