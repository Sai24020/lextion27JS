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
 
        // PROBLEM 1: Dessa egenskaper (seen, rating, review) läggs till men används aldrig
       

        // Dessutom är de kanske inte relevanta för person-objekt
      /*  data.forEach(movie => {
            movie.seen = false;
            movie.rating = 0;
            movie.review = "";
        });*/
        // spara svaret från API till LS
        localStorage.setItem("all_movies", JSON.stringify(data));
    }
    catch (error) {
        console.error(error);
    }
};


 
async function checkMovies() {
    // kolla om det redan finns filmer i LS
    const all_movies = JSON.parse(localStorage.getItem("all_movies"));
    if (all_movies) {
        // i så fall: rendera från LS
        renderMoviesToUI(all_movies);
    } else {
        // PROBLEM 2: Asynkront problem - fetchMovies är async men vi väntar inte på resultatet
        // Detta kan leda till att updated_all_movies blir null
        await fetchMovies();  // Vänta på att datan hämtas
        const updated_all_movies = JSON.parse(localStorage.getItem("all_movies"));
        if (updated_all_movies) {
            renderMoviesToUI(updated_all_movies);
        } else {
            console.error("Inga filmer hittades efter hämtning.");
        }

    //    renderMoviesToUI(updated_all_movies);
    }
};
//checkMovies();
 
// rendera från LS till mitt UI
function renderMoviesToUI(movies) {
    console.log(movies);
    const moviesContainerEl = document.getElementById('movies-container');
    movies.forEach((movie) => {
        const movieEl = document.createElement("article");
        movieEl.innerHTML = `
        <!-- PROBLEM 3: Felaktig syntax för background-image och films.url existerar inte -->
        <!-- PROBLEM 4: movie.films.id är felaktigt då films är en array/URL -->
       <figure style="height: 150px; width: 250px; margin-top: 3rem; background-image: url('${movie.image}');">

<p class="movie-container__like"> Film länk: 
    ${movie.films.length > 0 ? `<a href="${movie.films[0]}" target="_blank">${movie.films[0]}</a>` : "Ingen film hittad"}
</p>
        <figure style="height: 150px; width: 250px; margin-top: 3rem; background-image: url('${movie.image}');">
        <figcaption style="background-color: black; margin-bottom: 3rem;">
            <label for="${movieId}">Like ( ${movie.name} )</label>
            <input class="like-checkbox" id="${movieId}" type="checkbox" ${movie.liked ? "checked" : ""}>
            <p class="movie-container__rtScore">Kön: ${movie.gender} och Ålder: ${movie.age}</p>
        </figcaption>
        </figure>
        <h4 class="movie-container__name">Name: ${movie.name}</h4>
        <p class="movie-container__eyeC"> Eye Color: ${movie.eye_color}</p>
        <p class="movie-container__hairC"> Hair color: ${movie.hair_color}</p>
       
        <!-- PROBLEM 6: Detta är bara text, ingen faktisk länk. movie.films verkar ju vara en array -->
        <p class="movie-container__like"> Film länk: 
            ${movie.films.length > 0 ? `<a href="${movie.films[0]}" target="_blank">${movie.films[0]}</a>` : "Ingen film hittad"}
        </p>
        `;
        moviesContainerEl.appendChild(movieEl);
    });

        document.querySelectorAll(".like-checkbox").forEach(checkbox => {
            checkbox.removeEventListener("change", updateLikeStatus);
            checkbox.addEventListener("change", (event) => {
            });
      });
    }
             
 function updateLikeStatus(event) {
     const movieId = event.target.id;
     let movies = JSON.parse(localStorage.getItem("all_movies")) || [];
        
     let movie = movies.find(m => m.id === movieId || m.name.replace(/\s+/g, "-") === movieId);
     if (movie) {
             movie.liked = event.target.checked;
             localStorage.setItem("all_movies", JSON.stringify(movies));
      }
    }
