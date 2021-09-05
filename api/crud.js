import axios from 'axios'

const client = axios.create({
  baseURL: `https://crud-books-api.herokuapp.com/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTree() {
    return client.get('/tree')
  },
  updateNode(node) {
    return client.post('/update/' + node)
  },
  deleteNode(node) {
    return client.delete('/delete/', node)
  },
  createNode(node) {
    return client.post('/create/' + node)
  },
  exportCSV () {
    return client.get('/export')
  }
}