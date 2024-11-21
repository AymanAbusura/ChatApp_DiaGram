import { avatar, more, video, edit } from "../../assets"

const UserInfo = () => {
  return (
    <div className="userinfo">
      <div className="user">
        <img src={avatar} width={100} height={100} alt="" />
        <h2>Ayman</h2>
      </div>

      <div className="icons">
        <img src={more} alt="" />
        <img src={video} alt="" />
        <img src={edit} alt="" />
      </div>
    </div>
  )
}

export default UserInfo