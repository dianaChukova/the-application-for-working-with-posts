import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

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
]

export const MainPage = () => (
    <>
        <Container>
            <Typo>Новые публикации</Typo>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    </>
)