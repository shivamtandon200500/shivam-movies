import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HoverVideoPlayer from 'react-hover-video-player';


export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movie/find/" + item, {
          headers: {
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNhZTViMjhjYTU5Njk5ODMyODUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDkxNjI4OSwiZXhwIjoxNjMxMzQ4Mjg5fQ.Hkq3HaVjBMUA5IvzdT3sN8gv5zSLVXiGXG4l_QF6aOM",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
        src={movie?.imgSm}
        // src={movie.img}
         alt="" />
        {isHovered && (
          <>
            {/* <iframe src={movie.trailer}frameborder='0' allow='autoplay;' loop /> */}
            <video 
            src={movie.trailer}
             autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}