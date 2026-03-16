import { useEffect, useState } from "react"

import {
  Container,
  Typography,
  Box,
  CssBaseline
} from "@mui/material"

import { ThemeProvider, createTheme } from "@mui/material/styles"

import type { IUser } from "./types/User"
import type { IPost } from "./types/Post"

import UserCard from "./components/UserCard"
import PostList from "./components/PostList"

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

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

    <ThemeProvider theme={darkTheme}>

      <CssBaseline />

      <Container maxWidth="lg">

        <Typography
          variant="h4"
          sx={{ mt: 4, mb: 4 }}
        >
          Users
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gap={4}
        >

          {/* Users column */}

          <Box display="grid" gap={2}>

            {users.map(user => (

              <UserCard
                key={user.id}
                user={user}
                onClick={() => fetchPosts(user)}
              />

            ))}

          </Box>


          {/* Posts column */}

          <Box>

            {selectedUser && (

              <>
                <Typography variant="h5" mb={2}>
                  Posts by {selectedUser.name}
                </Typography>

                <PostList posts={posts}/>

              </>

            )}

          </Box>

        </Box>

      </Container>

    </ThemeProvider>

  )

}

export default App