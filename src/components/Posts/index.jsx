import { Post } from "./components/Post"
import * as SC from "./styles"

export const Posts = ({ posts, onDelete }) => (
    <SC.Posts>
        {posts.map((post) => (
            <Post 
                key={post.id} 
                post={post}
                onDelete={onDelete ? () => onDelete(post.id) : undefined}
            />
        ))}
    </SC.Posts>
)