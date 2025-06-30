import { NavigationLink } from '../../../Link/styles'
import * as SC from './styles'


export const Post = ({post}) => (<SC.Post>
    <SC.Image src={post.image} alt={post.title}/>
    <SC.Title>{post.title}</SC.Title>
    <NavigationLink to={`/posts/${post.id}`}>Читать далее...</NavigationLink>
</SC.Post>)