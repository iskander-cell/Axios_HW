import { Card, CardContent, Typography, Box } from "@mui/material"

import type { IPost } from "../types/Post"

interface Props {
  posts: IPost[]
}

const PostList = ({ posts }: Props) => {

  return (

    <Box display="grid" gap={2}>

      {posts.map(post => (

        <Card key={post.id}>

          <CardContent>

            <Typography>
              {post.title}
            </Typography>

          </CardContent>

        </Card>

      ))}

    </Box>

  )

}

export default PostList