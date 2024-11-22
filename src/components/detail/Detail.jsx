import { avatar, arrowUp, arrowDown, download } from "../../assets"

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={avatar} alt="avatar" />
        <h2>Ayman</h2>
        <p>Hello</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src={arrowDown} alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <span>photo_name.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <span>photo_name.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <span>photo_name.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Detail