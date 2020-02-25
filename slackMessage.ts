// curl -X POST --data-urlencode "payload={\"channel\": \"#general\", \"username\": \"webhookbot\", \"text\": \"This is posted to #general and comes from a bot named webhookbot.\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/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
const axios = require('axios')

const slackUrl = 'https://hooks.slack.com/services/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'

const clientName = process.argv[2] || '{clientName}'
const branchName = process.argv[3] || '{branchName}'
const failed = process.argv[4] || false
let text = `${clientName} - staging <${branchName}> has completed building`
if (failed) {
  text = `${clientName} - staging <${branchName}> has failed.`
}

axios.post(slackUrl, {
  channel: 'fe-alerts',
  icon_emoji: '',
  username: 'GithubActions',
  text
})


