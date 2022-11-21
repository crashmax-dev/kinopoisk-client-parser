import { fetch } from 'zx'
import { readFile } from 'node:fs/promises'

const movies = JSON.parse(
  await readFile(
    new URL('./movies.json', import.meta.url)
  )
)

for (const movie of movies) {
  const transactionID = Math.random().toString(16).slice(2)
  await fetch("https://gql.twitch.tv/gql", {
  "headers": {},
  "body": `[{\"operationName\":\"RedeemCustomReward\",\"variables\":{\"input\":{\"channelID\":\"156632065\",\"cost\":1,\"prompt\":null,\"rewardID\":\"cdaf337e-7eaf-4adb-a4ef-08e476d4d649\",\"textInput\":\"${movie}\",\"title\":\"test\",\"transactionID\":\"${transactionID}\"}},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"d56249a7adb4978898ea3412e196688d4ac3cea1c0c2dfd65561d229ea5dcc42\"}}}]`,
  "method": "POST"
});
}
