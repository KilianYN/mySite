function addAnime() {
    const name = document.getElementById('animeName').value.trim();
    const img = document.getElementById('animeImg').value.trim();
    const rating = document.getElementById('animeRating').value.trim();

    if (!name || !img || !rating) {
        alert('Please fill all fields!');
        return;
    }

    const animeList = document.getElementById('animeList');
    const animeDiv = document.createElement('div');
    animeDiv.className = 'anime-item';
    animeDiv.innerHTML = `<img src="${img}" alt="${name}" class="anime-img"><p>${name} (${rating})</p>`;
    animeList.appendChild(animeDiv);

    // Trigger fade-in animation
    setTimeout(() => animeDiv.classList.add('show'), 50);

    // Clear inputs
    document.getElementById('animeName').value = '';
    document.getElementById('animeImg').value = '';
    document.getElementById('animeRating').value = '';
}
