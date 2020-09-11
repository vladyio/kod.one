import env from '../config'

const SnippetAPI = {
  async create(snippetValue) {
    const response = await fetch(`${env.API_URL}/snippets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        snippet: {
          code: snippetValue
        }
      })
    })
    return await response.json()
  },

  async update(snippetId, snippetValue) {
    const response = await fetch(`${env.API_URL}/snippets/${snippetId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        snippet: {
          code: snippetValue
        }
      })
    })
    return await response.json()
  },

  async get(snippetId) {
    const response = await fetch(`${env.API_URL}/snippets/${snippetId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json()
  }
}

export default SnippetAPI