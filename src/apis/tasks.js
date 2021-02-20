import axios from "axios"

const endpoint = "tasks/"

const api = axios.create({
  baseURL: "http://localhost:3001/",
})
export default api

export async function deleteTask(id) {
  await api
    .delete(endpoint + id)
    .then((response) => {
      return true
    })
    .catch((e) => {
      console.log(e)
      return false
    })
}
