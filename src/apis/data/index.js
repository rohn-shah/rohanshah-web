import Axios from "axios";

export const fetchUserData = (username) => {
  try {
    return Axios.get(`https://api.github.com/users/${username}`)
      .then((response) => response)
      .catch((err) => {
        if (err) {
          throw new Error(err);
        }
      });
  } catch (err) {
    return err.message;
  }
};
