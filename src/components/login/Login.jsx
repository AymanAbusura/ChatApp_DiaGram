import { useState } from 'react'

import { avatar } from "../../assets"

const Login = () => {
  const [image, setImage] = useState({
    file: null,
    url: ""
  });

  const handleImage = (e) => {
    if(e.target.files[0]) {
      setImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
          />

          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
          />

          <button>Sign In</button>
        </form>
      </div>
      
      <div className="seperator"></div>
      
      <div className="item">
      <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img src={image.url || `${avatar}`} alt="" />
            Upload an image
          </label>
          <input 
            type="file" 
            id="file"
            style={{ display: "none" }}
            onChange={handleImage}
          />

          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
          />

          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
          />

          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
          />

          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login