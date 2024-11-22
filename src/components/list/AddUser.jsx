import { avatar } from "../../assets"

const AddUser = () => {
  return (
    <div className="addUser">
        <form>
            <input type="text" placeholder="Username" name="username" />
            <button type="submit">Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src={avatar} alt="" />
                <span>Ayman</span>
            </div>
            <button>Add</button>
        </div>
    </div>
  )
}

export default AddUser