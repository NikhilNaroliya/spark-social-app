import { useContext } from "react";
import "./comments.css";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img className="comment-profile" src={currentUser.profilePic} alt="" />
        <input id="comment-input" type="text" placeholder="write a comment" />
        <button id="send-btn">Send</button>
      </div>
      {
      comments.map((comment) => (
        <div className="comment">
          <img  className="comment-profile" src={comment.profilePicture} alt="" />
          <div className="comment-info">
            <span id="comment-name">{comment.name}</span>
            <p id="comment-para">{comment.desc}</p>
          </div>
          <span className="comment-date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;