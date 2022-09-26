import axios from "axios"

let baseUrl = "https://api.chucknorris.io"

export const getAll =async () => axios.get(`${baseUrl}/jokes/search?query=all`)

export const getOne =async (id) => axios.get(`${baseUrl}/jokes/${id}`)

export const getCategories =async () => axios.get(`${baseUrl}/jokes/categories`)