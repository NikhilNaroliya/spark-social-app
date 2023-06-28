import "./share.css";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="share-container">
        <div className="share-top">
          <img
            className="share-profile"
            src={currentUser.profilePic}
            alt=""
          />
          <input id="share-input" type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="share-bottom">
          <div className="share-left">
            <input  type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="share-item">
                <img className="share-item-pic" src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className=" share-item">
              <img className="share-item-pic" src={Map} alt="" />
              <span className="share-span">Add Place</span>
            </div>
            <div className="share-item">
              <img className="share-item-pic" src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="share-right">
            <button id="share-button">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;