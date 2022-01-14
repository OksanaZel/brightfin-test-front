import UsersApiService from "./apiService";
import usersListTpl from "../templates/users-list.hbs";

const usersListRoot = document.querySelector("#list");

const usersApiService = new UsersApiService();

function renderUsersList(users) {
  const markup = usersListTpl(users);
  usersListRoot.insertAdjacentHTML("beforeend", markup);
}

usersApiService.fetchAllUsers().then((response) => {
  renderUsersList(response);
});
