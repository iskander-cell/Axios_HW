import { useEffect, useState } from "react"

import type { IUser } from "./types/User"

import UserCard from "./components/UserCard"

import "./styles/app.css"

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {

    const fetchUsers = async () => {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )

      const data: IUser[] = await response.json()

      setUsers(data)

    }

    void fetchUsers()

  }, [])

  return (

    <div className="container">

      <h1>Users</h1>

      {users.map(user => (

        <UserCard
          key={user.id}
          user={user}
          onClick={() => {}}
        />

      ))}

    </div>

  )

}

export default App