import React, { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./reducer";
import PropTypes from "prop-types";
import {
  FETCH_USER_START,
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
} from "./types";
import { fetchUserData } from "../../apis/data";

export const UserContext = createContext();

const UserProvider = (props) => {
  const initalState = {
    isFetching: true,
  };
  const [user, userDispatch] = useReducer(userReducer, initalState);

  useEffect(() => {
    userDispatch({
      type: FETCH_USER_START,
    });
    fetchUserData("rohanshah945")
      .then((response) => {
        userDispatch({
          type: FETCH_USER_COMPLETE,
          payload: {
            user: response.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        userDispatch({
          type: FETCH_USER_ERROR,
        });
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element,
};

export default UserProvider;
