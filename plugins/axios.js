import { edgerydersUrl, discourseApiKey } from '../config'

export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    if (config.url.indexOf(edgerydersUrl) > -1 && config.method === 'get') {
      config.headers.common.Accept = 'application/json'
      config.params = { api_key: discourseApiKey }
    }
  })
}
