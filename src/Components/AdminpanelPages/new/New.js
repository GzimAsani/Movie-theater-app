import Navbar from "../../Adminpanel/navbar/Navbar";
import Sidebar from "../../Adminpanel/sidebar/Sidebar";
import { AiFillFolderOpen } from "react-icons/ai";
import "./new.css";
import { useState } from "react";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  return (
    <div className="new1">
      <Sidebar />
      <div className="newContainer1">
        <Navbar />
        <div className="top6">
          <h1 className="title6">{title}</h1>
        </div>
        <div className="bottom6">
          <div className="left6">
            <img
              className="img6"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
              }
              alt=""
            />
          </div>
          <div className="right6">
            <form>
              <div className="formInput1">
                <label htmlFor="file">
                  Image: <AiFillFolderOpen />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput1" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}

              <button className="butoni1">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
