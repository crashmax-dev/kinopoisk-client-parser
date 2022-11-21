import { fetch } from 'zx'
import { readFile } from 'node:fs/promises'

const movies = JSON.parse(
  await readFile(
    new URL('./movies.json', import.meta.url)
  )
)

for (const movie of movies) {
  const transactionID = Math.random().toString(16).slice(2)
  // fetch(...)
}
