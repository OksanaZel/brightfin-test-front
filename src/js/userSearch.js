import UsersApiService from "./apiService";
import getRefs from "./getRefs";
import usersListTpl from "../templates/users-list.hbs";

const usersListRoot = document.querySelector("#list");
const refs = getRefs();

const usersApiService = new UsersApiService();
refs.searchForm.addEventListener("submit", onSearchUser);

async function onSearchUser(e) {
  e.preventDefault();

  const newQuery = e.currentTarget.elements.query.value.trim();

  usersApiService.query = newQuery.charAt(0).toUpperCase() + newQuery.slice(1);

  if (!usersApiService.searchQuery) {
    return;
  }

  refs.searchForm.reset();
  refs.listSection.innerHTML = "";

  usersApiService.fetchOneUsers().then((response) => {
    renderUsersList(response.user);
  });
}

function renderUsersList(user) {
  const markup = usersListTpl(user);
  usersListRoot.insertAdjacentHTML("beforeend", markup);
}
