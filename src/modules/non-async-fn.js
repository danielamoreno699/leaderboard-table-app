import { getData, postData, id } from './async-fn.js';

const displayData = async () => {
  try {
    const data = await getData(id);
    const { result } = data;

    result.sort((a, b) => b.score - a.score);

    const container = document.getElementById('tbody');
    container.innerHTML = '';

    result.forEach((result, index) => {
      const tr = document.createElement('tr');
      const trContent = `
                <th scope="row">${index + 1}</th>
                <td>${result.user} : ${result.score}</td>
              `;
      tr.innerHTML = trContent;
      container.appendChild(tr);
    });
  } catch (error) {
    return error;
  }
  return null;
};

displayData();

// add Input
const add = () => {
  const usernameInput = document.getElementById('username');
  const scoreInput = document.getElementById('score');
  const form = document.getElementById('signup');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!usernameInput.value || !scoreInput.value) {
      return;
    }

    if (Number.isNaN(scoreInput.value)) {
      return;
    }

    postData({ user: usernameInput.value, score: scoreInput.value });
    displayData();
  });
};

export { displayData, add };