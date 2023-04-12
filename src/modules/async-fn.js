const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/Games';
const id = '6D2CdavEe76X4dcCFdkm';

const getData = async (id) => {
  try {
    const res = await fetch(`${url}/${id}/scores/`, {
      method: 'GET',

    });
    const responseData = await res.json();
    // console.log(responseData);
    return responseData;
  } catch (error) {
    // console.log(error);
  }
  return null;
};

const message = () => {
  const submitSuccess = document.getElementById('submit-success');
  submitSuccess.style.display = 'block';
  setTimeout(() => {
    submitSuccess.style.display = 'none';
  }, 2000);
};

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
    // console.log(responseData);
  } catch (error) {
    // console.log(error);
  }
  return null;
};

export { getData, postData, id };