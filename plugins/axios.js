export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    if (config.url.indexOf(process.env.edgerydersUrl) > -1 && config.method === 'get') {
      config.headers.common.Accept = 'application/json';
      config.params = { api_key: process.env.discourseApiKey };
    }
  })
}
