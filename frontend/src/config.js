const development = {
  API_URL: 'http://localhost:3000/api/v1'
}

const production = {
  API_URL: 'https://api.kod.one/api/v1'
}

const buildEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return development

    case "production":
      return production

    default:
      return development
  }
}

const env = buildEnv()

module.exports = env
