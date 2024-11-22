import { useState } from 'react'
import { avatar, search, plus, minus } from "../../assets"
import AddUser from './AddUser'

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false)

  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>

        <img src={addMode ? minus : plus} alt="add" className="add" onClick={() => setAddMode(!addMode)} />
      </div>

      <div className='item'>
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ayman</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ayman</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ayman</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ayman</span>
          <p>Hello</p>
        </div>
      </div>
      
      {addMode && <AddUser />}
    </div>
  )
}

export default Chatlist