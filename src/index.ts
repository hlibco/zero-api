import http from 'http'
import { config } from './config'
import { sum } from './helpers/math'

export const server = http.createServer(requestListner)
server.listen(config.port, () => {
  console.log(`Server is running on http://0.0.0.0:${config.port}`)
})

async function requestListner(request, response) {
  const count = sum(10, 90)
  const data = {
    url: request.url,
    message: `${count} great ideas on ${config.planet}`,
    success: true
  }
  console.log({ data })

  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  response.end(JSON.stringify(data))
}
