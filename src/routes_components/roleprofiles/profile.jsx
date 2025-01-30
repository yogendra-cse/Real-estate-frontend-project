import './profile.scss';
import List from '../list/list';
import Chat from '../../components/chat/chat';
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
const Profile = ()=>{
  
  const {updateUser,currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  // current user not exists

  const handleLogout = async (e) =>{
    e.preventDefault()
    try{
      await apiRequest.post("/api/auth/logout")
      updateUser(null)
      navigate("/")//homepage
    }catch(err){

    }
  }
    return(
      // if there is an user show the profile page
  
        <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar || "/noavatar.webp"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
            <Chat />
        </div>
      </div>
    </div>
    
    )
}
export default Profile;