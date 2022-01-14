import axios from "axios";
import { BASE_URL } from "./constants";

axios.defaults.baseURL = BASE_URL;

export default class UsersApiService {
  constructor() {
    this.searchQuery = "";
  }

  async fetchAllUsers() {
    const url = `api/data`;
    const { data } = await axios.get(url);
    return data.result.users;
  }

  async fetchOneUsers() {
    const url = `api/data/name/?name=${this.searchQuery}`;
    const { data } = await axios.get(url);
    return data.result;
  }

  resetPage() {
    this.searchQuery = "";
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
