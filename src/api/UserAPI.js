import axios from "axios";
import apiUrl from "./apiConfig.js";

const postUser = async () => {
  console.log(apiUrl, "/users");
  const newUser = await axios({
    url: apiUrl + "/users",
    method: "POST",
    data: {
      user: {
        // nickname: auth0Client.getProfile().nickname
      },
    },
  });
  console.log(newUser);
};

export default postUser;
