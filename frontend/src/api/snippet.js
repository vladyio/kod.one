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

  async update(snippetId, snippetParams) {
    const response = await fetch(`${env.API_URL}/snippets/${snippetId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        snippet: snippetParams
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
  },

  async fork(snippetId) {
    const response = await fetch(`${env.API_URL}/snippets/fork`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sid: snippetId
      })
    })

    return await response.json()
  }
}

export default SnippetAPI