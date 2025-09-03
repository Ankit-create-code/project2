
  const TOPMOVIES_APIURL = "https://api.sampleapis.com/movies/animation"; 
    const parentRow = document.querySelector("#parentRow");

    const getMovies = async () => {
      try {
        const response = await fetch(TOPMOVIES_APIURL);
        const data = await response.json();
        showMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    const showMovies = (movies) => {
      parentRow.innerHTML = ""; // Clear previous results

      movies.map((movie) => {
        const card = document.createElement("div");
        card.classList.add("mycol");

        card.innerHTML = `
          <img src="${movie.posterURL || "https://via.placeholder.com/300"}" width="100%" height="60%">
          <div class="overlay">
            <h4>${movie.title || "Unknown Title"}</h4>
            <span>${movie.imdbRating || "N/A"}</span>
            <div>
              <b>Overview</b><br>
              <p>${movie.description || "No description available."}</p>
            </div>
          </div>
        `;

        parentRow.appendChild(card);
      });
    };

    getMovies();