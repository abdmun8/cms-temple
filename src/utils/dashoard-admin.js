import axios from 'axios';

let SERVER_URL = 'http://lolyta.am8.space:5000/api/';

// const login = async data => {
//   const LOGIN_ENDPOINT = `${SERVER_URL}login`;
//   let user = null;
//   try {
//     let response = await axios.post(LOGIN_ENDPOINT, data);
//     if (response.status === 200 && response.data.jwt) {
//       let jwt = response.data.jwt;
//       user = {
//         name: response.data.name,
//         username: response.data.username,
//         jk: response.data.jk,
//         nik: response.data.nik,
//         id: response.data.id,
//         access_token: jwt
//       };

//       return { success: true, data: user };
//     } else {
//       return { success: false, data: {} };
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// const register = async data => {
//   const SIGNUP_ENDPOINT = `${SERVER_URL}/api/register.php`;
//   try {
//     let response = await axios({
//       method: "post",
//       responseType: "json",
//       url: SIGNUP_ENDPOINT,
//       data: data
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// const logout = () => {
//   try {
//     localStorage.setItem("persist:root", JSON.stringify({}));
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

const getTrxAndVerify = async data => {
  const URL = `${SERVER_URL}transaction-and-verification`;
  try {
    let response = await axios.get(URL);
    // console.log(response);
    return response;
    // if (response.status === 200 && response.data.success) {
    //   return { success: true, data: {}, message: response.data.message };
    // } else {
    //   return { success: false, data: {}, message: response.data.message };
    // }
  } catch (e) {
    console.log(e);
  }
};

export { getTrxAndVerify };