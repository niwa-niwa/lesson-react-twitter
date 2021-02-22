import axios from "axios"

const endpoint = "tasks/"

const api = axios.create({
  baseURL: "http://localhost:3001/",
})
export default api

export async function getTasks() {
  return await api
    .get(endpoint)
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.error("getTasks=", e)
      throw new Error(e)
    })
}

export async function deleteTask(id) {
  return await api
    .delete(endpoint + id)
    .then(() => {
      return true
    })
    .catch((e) => {
      console.error("deleteTask=", e)
      throw new Error(e)
    })
}

export async function postNewTask(formData) {
  return await api
    .post("tasks", formData)
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.error("postNewTask=", e)
      throw new Error(e)
    })
}

export async function patchTask(formData) {
  return await api
    .patch(`/tasks/${formData.id}`, formData)
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.error("patchTask=", e)
      throw new Error(e)
    })
}
