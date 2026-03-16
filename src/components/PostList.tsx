import type { IPost } from "../types/Post"

interface Props {
  posts: IPost[]
}

const PostList = ({ posts }: Props) => {

  return (

    <div>

      {posts.map(post => (

        <div key={post.id}>

          {post.title}

        </div>

      ))}

    </div>

  )

}

export default PostList