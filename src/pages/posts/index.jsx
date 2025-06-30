import { Container } from "../../components/Container"
import { Posts } from "../../components/Posts"
import { Typo } from "../../components/Typo"


const INITIAL_POSTS =[
  {
    id: 1,
    title: 'Post 1',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
  {
    id: 2,
    title: 'Post 2',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
  {
    id: 3,
    title: 'Post 3',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
  {
    id: 4,
    title: 'Post 4',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
  {
    id: 5,
    title: 'Post 5',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
   {
    id: 6,
    title: 'Post 6',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
   {
    id: 7,
    title: 'Post 7',
    image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig'
  },
]

export const PostsPage = () => <>
    <Container>
        <Typo>Публикации</Typo>
        <Posts posts= {INITIAL_POSTS}/>
    </Container>
</>