import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../axiosInstance"

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axiosInstance.get("/users?new=true", {
          headers: {
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNhZTViMjhjYTU5Njk5ODMyODUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDkxNjI4OSwiZXhwIjoxNjMxMzQ4Mjg5fQ.Hkq3HaVjBMUA5IvzdT3sN8gv5zSLVXiGXG4l_QF6aOM"
            },
        });
        setNewUsers(res.data);
        console.log("ada",newUsers)
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}