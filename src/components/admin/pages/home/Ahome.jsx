import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Ahome.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axiosInstance from "../../../../axiosInstance"
export default function Ahome() {
  const MONTHS= useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[])

  const [userStats,setUserStats]=useState([]);
  
  useEffect(()=>{
    const getStats=async()=>{
      try{
      const res=await axiosInstance.get("/users/stats",{
        headers: {
          token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
          // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNhZTViMjhjYTU5Njk5ODMyODUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDkxNjI4OSwiZXhwIjoxNjMxMzQ4Mjg5fQ.Hkq3HaVjBMUA5IvzdT3sN8gv5zSLVXiGXG4l_QF6aOM"
        },
      })
      console.log("sa",res.data)
      const statsList=res.data.sort(function(a,b){
        return a._id-b._id;
      });
      statsList.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User":item.total}]))
    }catch(err){
      console.log(err)
    }
  }
  getStats();
  },[MONTHS])
 
  return (
    <div className="Ahome">
      {/* <FeaturedInfo /> */}
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
