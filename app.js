// Initialize Icons
lucide.createIcons();

// Elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const typeSelect = document.getElementById('typeSelect');
const resultsGrid = document.getElementById('resultsGrid');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('errorMessage');

// Modals
const movieModal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

// State - LÜTFEN AŞAĞIDAKİ SATIRA KENDİ API KEY'İNİZİ YAZIN
const API_KEY = '8a90d081'; // Örnek: '8b0660a9' VEYA kendi keyiniz

// Eğer anahtar boşsa, undefined ise veya 'buraya_omdb_api_keyinizi_yazın' şeklindeyse demo modunu aç.
const useDemo = !API_KEY || API_KEY === 'buraya_omdb_api_keyinizi_yazın';

// Base API URL
const BASE_URL = 'https://www.omdbapi.com/';

// Dummy Data Fallback for Premium Experience even if API is missing
const dummyMovies = [
    { imdbID: "tt0468569", Title: "The Dark Knight", Year: "2008", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" },
    { imdbID: "tt0111161", Title: "The Shawshank Redemption", Year: "1994", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGc@._V1_SX300.jpg" },
    { imdbID: "tt1375666", Title: "Inception", Year: "2010", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" },
    { imdbID: "tt0133093", Title: "The Matrix", Year: "1999", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
    { imdbID: "tt0109830", Title: "Forrest Gump", Year: "1994", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWEwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg" },
    { imdbID: "tt0903747", Title: "Breaking Bad", Year: "2008–2013", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YmMxN2ItOTE1Zi00ZWE1LTlhNWEtYTdkMDQ4ZjM0MGM1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg" },
    { imdbID: "tt0068646", Title: "The Godfather", Year: "1972", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDllNDkzXkEyXkFqcGdeQXVyODIxMDIyMTk@._V1_SX300.jpg" },
    { imdbID: "tt0816692", Title: "Interstellar", Year: "2014", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }
];

const dummyDetail = {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Crime, Drama",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Awards: "Won 2 Oscars. 163 wins & 164 nominations total",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    imdbRating: "9.0",
    imdbVotes: "2,842,504",
    BoxOffice: "$534,987,076"
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // If no API key, use demo data on load
    if (useDemo || !API_KEY) {
        useDemo = true;
        API_KEY = 'demo';
        renderMovies(dummyMovies);
    } else {
        // Fetch a default search to populate the screen
        fetchMovies('batman', '');
    }
});

// Search Submission
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    const type = typeSelect.value;

    if (query) {
        if (useDemo) {
            // Fake search in dummy data
            const filtered = dummyMovies.filter(m => m.Title.toLowerCase().includes(query.toLowerCase()));
            renderMovies(filtered);
        } else {
            fetchMovies(query, type);
        }
    }
});

// Fetch from API
async function fetchMovies(query, type) {
    showLoader();
    try {
        const url = `${BASE_URL}?s=${encodeURIComponent(query)}&type=${type}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            renderMovies(data.Search);
        } else {
            if (data.Error === 'Invalid API key!') {
                showError("Geçersiz API Anahtarı! Lütfen OMDb'den gelen maildeki aktivasyon linkine tıkladığınıza ve API anahtarını doğru yazdığınıza emin olun.");
                // Modalı kaldırmıştık, o yüzden openApiModal(); fonksiyonunu çağırmıyoruz
                resultsGrid.innerHTML = '';
            } else {
                showError(data.Error === "Movie not found!" ? "Sonuç bulunamadı." : data.Error);
                resultsGrid.innerHTML = '';
            }
        }
    } catch (err) {
        showError("Bir bağlantı veya sistem hatası oluştu: " + err.message);
    } finally {
        hideLoader();
    }
}

// Render Grid
function renderMovies(movies) {
    resultsGrid.innerHTML = '';

    if (movies.length === 0) {
        showError("Sonuç bulunamadı.");
        return;
    }

    movies.forEach(movie => {
        // Fallback for missing poster image
        const posterSrc = movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400';

        const card = document.createElement('article');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-poster-wrapper">
                <img src="${posterSrc}" alt="${movie.Title}" class="movie-poster" loading="lazy">
                <div class="movie-overlay">
                    <h3 class="movie-title">${movie.Title}</h3>
                    <div class="movie-info">
                        <span>${movie.Year}</span>
                        <span class="movie-type">${movie.Type === 'movie' ? 'Film' : 'Dizi'}</span>
                    </div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => fetchMovieDetails(movie.imdbID));
        resultsGrid.appendChild(card);
    });
}

// Fetch Detailed Info
async function fetchMovieDetails(id) {
    openModal();

    if (useDemo) {
        setTimeout(() => {
            renderModalContent(dummyDetail);
        }, 500); // simulate network delay
        return;
    }

    try {
        const url = `${BASE_URL}?i=${id}&plot=full&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            renderModalContent(data);
        } else {
            modalBody.innerHTML = `<p class="error-message">Detaylar yüklenemedi: ${data.Error}</p>`;
        }
    } catch (err) {
        modalBody.innerHTML = `<p class="error-message">Bir hata oluştu.</p>`;
    }
}

function renderModalContent(data) {
    const posterSrc = data.Poster !== 'N/A' ? data.Poster : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400';

    modalBody.innerHTML = `
        <div class="movie-detail-container">
            <div class="detail-poster">
                <img src="${posterSrc}" alt="${data.Title}">
            </div>
            <div class="detail-info">
                <h2 class="detail-title">${data.Title}</h2>
                <div class="detail-meta">
                    <span class="imdb-rating"><i data-lucide="star"></i> ${data.imdbRating}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                    <span>${data.Genre}</span>
                </div>
                
                <p class="detail-plot">${data.Plot !== 'N/A' ? data.Plot : 'Konu bilgisi bulunmuyor.'}</p>
                
                <div class="detail-stats">
                    <div class="stat-label">Yönetmen</div>
                    <div class="stat-value">${data.Director}</div>
                    
                    <div class="stat-label">Oyuncular</div>
                    <div class="stat-value">${data.Actors}</div>
                    
                    <div class="stat-label">Dil</div>
                    <div class="stat-value">${data.Language}</div>
                    
                    <div class="stat-label">Ödüller</div>
                    <div class="stat-value">${data.Awards}</div>
                    
                    <div class="stat-label">Gişe</div>
                    <div class="stat-value">${data.BoxOffice || 'N/A'}</div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Loading & Error states
function showLoader() {
    loader.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    resultsGrid.innerHTML = '';
}

function hideLoader() {
    loader.classList.add('hidden');
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove('hidden');
}

// Modal Toggle Logic
function openModal() {
    movieModal.classList.remove('hidden');
    modalBody.innerHTML = `
        <div class="loader-container">
            <div class="spinner"></div>
            <p>Detaylar Yükleniyor...</p>
        </div>
    `;
}

function closeModal() {
    movieModal.classList.add('hidden');
}

closeModalBtn.addEventListener('click', closeModal);
movieModal.querySelector('.modal-backdrop').addEventListener('click', closeModal);


