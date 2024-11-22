import { useState } from "react"
import EmojiPicker from "emoji-picker-react"

import { avatar, phone, video, info, img, camera, mic, emoji } from "../../assets"

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="avatar" />
          <div className="texts">
            <span>Ayman</span>
            <p>Hello World</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={info} alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src={avatar} alt="avatar" />
          <div className="texts">
            <p>Hellooo</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Hellooo</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src={avatar} alt="avatar" />
          <div className="texts">
            <p>Hellooo</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Hellooo</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src={avatar} alt="avatar" />
          <div className="texts">
            <p>Hellooo</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt="avatar" />
            <p>Hellooo</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />
        </div>
        <input 
          type="text" 
          value={text}
          placeholder="Type a message..." 
          onChange={e => setText(e.target.value)} 
        />
        <div className="emoji">
          <img src={emoji} alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
            <EmojiPicker 
              open={open} 
              onEmojiClick={handleEmoji} 
            />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat