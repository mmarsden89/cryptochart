import axios from "axios";
import apiUrl from "./apiConfig.js";

const postUser = async () => {
  const newUser = await axios({
    url: apiUrl + "/users",
    method: "POST",
    data: {
      user: {
        nickname: "hello",
      },
    },
  });
  console.log(newUser);
};

const getUser = async () => {
  const userData = await axios(apiUrl + "/users/hello");
  console.log(userData);
};

export { postUser, getUser };
