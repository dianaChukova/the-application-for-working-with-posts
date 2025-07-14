import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Typo } from "../../../components/Typo"
import { Container } from "../../../components/Container/styles"
import { Link } from "../../../components/Link"
import * as SC from "./styles"
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice"

export const DetailPostPage = () => {
    const { id } = useParams()
    const {list} = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [postForDelete, setPostForDelete] = useState(null)

    const onDeletePost = () => {
        setPostForDelete(null)
        dispatch(deletePost(postForDelete))

        navigate('/posts')
    }

    useEffect(() => {
        const intId = Number(id)
        const findedPosts = list ? list.find((item) => item.id === intId) : undefined

        if (findedPosts) {
            dispatch(showPost(findedPosts))
        } else {
            dispatch(getPostById(intId))
        }
    }, [id, list, dispatch])

     if(postForView.loading) {
        return<Container>Загрузка...</Container>
    }

    if(!postForView.post || !postForView.post.hasOwnProperty("id")) {
        return<>Пост не найден</>
    }

    const { post } = postForView

    const image = post.image || "https://i.pinimg.com/736x/b2/1a/9f/b21a9ff51a2b511b3680603887147f01.jpg"

    return<Container>
        { postForDelete &&
            <SC.ModalWrapper>
                <SC.Modal>
                    <SC.ModalText>Вы уверены, что хотите удалить этот пост (id-{postForDelete.id})?</SC.ModalText>
                    <SC.ModalContent>
                        <button onClick={() => setPostForDelete(null)}>Нет</button>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                    </SC.ModalContent>
                </SC.Modal>
            </SC.ModalWrapper>
        }
        <Typo>{post.title}</Typo>
        <SC.Image src={image} alt={post.title}/>
        <SC.Text>{post.body}</SC.Text>
        <div style={{clear: "both"}}/>
        <SC.LinkWrapper>
            <Link to="/posts/">Назад</Link>
            {list && <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>}
            {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
        </SC.LinkWrapper>
    </Container> 
}