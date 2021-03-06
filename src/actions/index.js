import axios from "../api/axios";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const user = await axios.get(`users/${id}`);

  dispatch({ type: "FETCH_USER", payload: user.data });
};
