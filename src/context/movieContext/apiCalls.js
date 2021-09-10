import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movie", {
      headers: {
        token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNhZTViMjhjYTU5Njk5ODMyODUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDMzMDk2OCwiZXhwIjoxNjMwNzYyOTY4fQ.szoKaJDYuIzLMQvMIv2X8RjsDHrmcPclvaCz1YYE9pw"
        ,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movie/", movie, {
      headers: {
        token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNhZTViMjhjYTU5Njk5ODMyODUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDMzMDk2OCwiZXhwIjoxNjMwNzYyOTY4fQ.szoKaJDYuIzLMQvMIv2X8RjsDHrmcPclvaCz1YYE9pw" ,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movie/" + id, {
      headers: {
        token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        //  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNhZTViMjhjYTU5Njk5ODMyODUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDMzMDk2OCwiZXhwIjoxNjMwNzYyOTY4fQ.szoKaJDYuIzLMQvMIv2X8RjsDHrmcPclvaCz1YYE9pw",
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};