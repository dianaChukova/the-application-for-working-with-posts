import { Link } from "../../../ui/Link"
import * as SC from './styles'

export const Post = ({post}) => {
    const image = post.image || "https://i.pinimg.com/736x/b2/1a/9f/b21a9ff51a2b511b3680603887147f01.jpg"
    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title}/>
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
}

