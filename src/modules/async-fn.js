const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/Games';
const id = '6D2CdavEe76X4dcCFdkm';

// async functions for getting-data
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

// message that displays success alert
const message = () => {
  const submitSuccess = document.getElementById('submit-success');
  submitSuccess.style.display = 'block';
  setTimeout(() => {
    submitSuccess.style.display = 'none';
  }, 2000);
};

// async functions for posting-data
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