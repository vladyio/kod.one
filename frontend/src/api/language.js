import env from '../config'

const LanguageAPI = {
  async all() {
    const response = await fetch(`${env.API_URL}/languages`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json()
  }
}

export default LanguageAPI