const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const id = 'xdmogdKMFLxWw9Nqt7j0';

// async functions for getting-data aplying the GET method
const getData = async (id) => {
  try {
    const res = await fetch(`${url}/${id}/scores/`, {
      method: 'GET',

    });
    const responseData = await res.json();

    return responseData;
  } catch (error) {
    return error;
  }
};

// message that displays success alert when values are added successfully
const message = () => {
  const submitSuccess = document.getElementById('submit-success');
  submitSuccess.style.display = 'block';
  setTimeout(() => {
    submitSuccess.style.display = 'none';
  }, 2000);
};

// async function for posting-data
const postData = async (dataInfo) => {
  try {
    const res = await fetch(`${url}/${id}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataInfo),
    });
    const responseData = await res.json();
    message();
    return responseData;
  } catch (error) {
    return error;
  }
};

export { getData, postData, id };