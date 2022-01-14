import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const filesForm = document.getElementById('upload-file');
const filesInput = filesForm.querySelector('[name=file]');

filesForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const file = filesInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  await axios
    .post(`api/data`, formData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
});
