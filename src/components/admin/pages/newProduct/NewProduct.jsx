import "./newProduct.css";
import { createMovie } from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios" 
export default function NewProduct() {
  const history = useHistory()
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [upload, setUpload] = useState(0);
  const [url,setUrl] = useState("")
  const [url2,setUrl2] = useState("")
  const [url3,setUrl3] = useState("")
  const [url4,setUrl4] = useState("")

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    // setMovie({ ...movie, img:url,imgTitle: url2,imgSm: url3,trailer:url4, [e.target.name]: value });
    setMovie({ ...movie, [e.target.name]: value });
  };

//   const handleUpload = (e) => {
//   e.preventDefault();
//   const data=new FormData();
//   data.append("name",movie.title)
//   data.append("file",img)
//   console.log(movie.title)
//   console.log("img",img.name)
//   axios.post("/movie/",data, {
//   headers: {
//     token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
//     ,
//   },
// })
// createMovie(movie, dispatch);
// }
const postDetails = ()=>{
  const data = new FormData()
  data.append("file",img)
  data.append("upload_preset","netflix-clone")
  data.append("cloud_name","shivam20500")
  fetch("https://api.cloudinary.com/v1_1/shivam20500/image/upload",{
      method:"post",
      body:data
  })
  .then(res=>res.json())
  .then(data=>{
    setUrl(data.url)
    // console.log(data.url)
  })
  .catch(err=>{
      console.log(err)
  })
  const data2 = new FormData()
  data2.append("file",imgTitle)
  data2.append("upload_preset","netflix-clone")
  data2.append("cloud_name","shivam20500")
  fetch("https://api.cloudinary.com/v1_1/shivam20500/image/upload",{
      method:"post",
      body:data2
  })
  .then(res=>res.json())
  .then(data=>{
      setUrl2(data.url)
    // console.log(data.url)
  })
  .catch(err=>{
      console.log(err)
  })
  const data3 = new FormData()
  data3.append("file",imgSm)
  data3.append("upload_preset","netflix-clone")
  data3.append("cloud_name","shivam20500")
  fetch("https://api.cloudinary.com/v1_1/shivam20500/image/upload",{
      method:"post",
      body:data3
  })
  .then(res=>res.json())
  .then(data=>{
    setUrl3(data.url)
    // console.log(data.url)
  })
  .catch(err=>{
      console.log(err)
  })
  const data4 = new FormData()
  data4.append("file",trailer)
  data4.append("upload_preset","netflix-clone")
  data4.append("cloud_name","shivam20500")
  fetch("https://api.cloudinary.com/v1_1/shivam20500/video/upload",{
      method:"post",
      body:data4
  })
  .then(res=>res.json())
  .then(data=>{
    setUrl4(data.url)
    // console.log(data.url)
  })
  .catch(err=>{
      console.log(err)
  })
  setUpload(4);
}
const handleUpload=(e)=>{
  e.preventDefault();
  postDetails()
}
const handleSubmit =(e) => {
  e.preventDefault();
    console.log(url);
      createMovie({title:movie.title,desc: movie.desc,img:url,imgTitle:url2,imgSm:url3,trailer:url4, video:movie.video,year:movie.year,
      limit : movie.limit,genre: movie.genre,isSeries:movie.isSeries,duration:movie.duration
      }, dispatch);
    setMovie("")
    setUrl("")
    setUrl2("")
    setUrl3("")
    setUrl4("")
    history.push("/admin/")
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="text"
            name="video"
            onChange={handleChange}
          />
        </div>
        {upload === 4 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
        {/* <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button> */}
      </form>
    </div>
  );
}



