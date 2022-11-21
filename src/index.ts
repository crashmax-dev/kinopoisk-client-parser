import { domReady, locationObserver } from '@zero-dependency/dom'
import { MAIN_TITLE, MOVIE_INFO } from './constants.js'
import { exportMovies, storageMovies } from './storage.js'

domReady().then(app)

window.addEventListener('keypress', (event) => {
  if (event.code === 'KeyZ') {
    const confirmExport = confirm(`Экспортировать и удалить ${storageMovies.values.length} фильмов?`)
    if (confirmExport) {
      exportMovies()
    }
  }
})

async function app() {
  locationObserver.on('popState', parseMovies)
  locationObserver.on('pushState', parseMovies)
  locationObserver.on('replaceState', parseMovies)
}

async function parseMovies() {
  const movies = document.querySelectorAll(MOVIE_INFO)
  for (const movie of movies) {
    const title = movie.querySelector(MAIN_TITLE)
    if (title && title.textContent) {
      storageMovies.write([
        ...new Set([...storageMovies.values, title.textContent])
      ])
    }
  }
}
