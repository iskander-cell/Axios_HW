import { useEffect, useState } from "react"

import type { IUser } from "./types/User"
import type { IPost } from "./types/Post"

import UserCard from "./components/UserCard"
import PostList from "./components/PostList"

import "./styles/app.css"

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [posts, setPosts] = useState<IPost[]>([])
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

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

  const fetchPosts = async (user: IUser) => {

    setSelectedUser(user)

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    )

    const data: IPost[] = await response.json()

    setPosts(data)

  }

  return (

    <div className="container">

      <h1>Users</h1>

      {users.map(user => (

        <UserCard
          key={user.id}
          user={user}
          onClick={() => fetchPosts(user)}
        />

      ))}

      {selectedUser && (

        <div>

          <h2>
            Posts by {selectedUser.name}
          </h2>

          <PostList posts={posts}/>

        </div>

      )}

    </div>

  )

}

export default App