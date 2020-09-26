const development = () => {
  const BASE_URL = 'http://localhost:3000'
  const API_URL = `${BASE_URL}/api/v1`

  return {
    BASE_URL: BASE_URL,
    API_URL: API_URL
  }
}

const production = () => {
  const BASE_URL = 'https://api.kod.one'
  const API_URL = `${BASE_URL}/api/v1`

  return {
    BASE_URL: BASE_URL,
    API_URL: API_URL
  }
}

const buildEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return development()

    case "production":
      return production()

    default:
      return development()
  }
}

const env = buildEnv()

module.exports = env
