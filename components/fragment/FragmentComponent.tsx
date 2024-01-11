import { Fragment } from "react"

interface Post {
  id: number
  title: string
  body: string
}

export const FragmentComponent = (posts: Post[]) => {
  return posts.map(post =>
    <Fragment key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Fragment>
  )
}