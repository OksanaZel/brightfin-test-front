import UsersApiService from "./apiService";
import getRefs from "./getRefs";
import usersListTpl from "../templates/users-list.hbs";

const usersListRoot = document.querySelector("#list");
const refs = getRefs();
const usersApiService = new UsersApiService();
refs.returnBtn.addEventListener("click", onSreturnToAllUsers);

async function onSreturnToAllUsers(e) {
  e.preventDefault();

  refs.searchForm.reset();
  refs.listSection.innerHTML = "";

  usersApiService.fetchAllUsers().then((response) => {
    renderUsersList(response);
  });
}

function renderUsersList(users) {
  const markup = usersListTpl(users);
  usersListRoot.insertAdjacentHTML("beforeend", markup);
}
