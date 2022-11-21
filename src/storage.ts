import { el } from '@zero-dependency/dom'
import { LocalStorage } from '@zero-dependency/storage'

export const storageMovies = new LocalStorage<string[]>('movies', [])

export function exportMovies() {
  if (!storageMovies.values.length) return

  const blob = new Blob(
    [JSON.stringify(storageMovies.values, null, 2)],
    {
      type: 'text/json'
    }
  )

  const link = el('a', {
    href: URL.createObjectURL(blob),
    download: `kinopoisk-films-${Date.now()}.json`
  })

  link.click()
  link.remove()
  storageMovies.reset()
}
