import { List, Chat, Detail, Login, Notification } from "./components"

function App() {
  const user = true;

  return (
    <div className='container'>
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (<Login />)}

      <Notification />
    </div>
  )
}

export default App
