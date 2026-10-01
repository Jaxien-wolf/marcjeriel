const availableGenres = new Set(["Comedy", "Adventure", "Sci-Fi", "Romance", "Sport"]);
const requestedGenre = new URLSearchParams(window.location.search).get("genre");
const genre = availableGenres.has(requestedGenre) ? requestedGenre : null;

if (genre) {
	document.querySelector("#genre-title").textContent = `${genre} Recommendations`;
	document.title = `${genre} Recommendations`;
}