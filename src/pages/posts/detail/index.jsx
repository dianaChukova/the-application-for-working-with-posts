import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Typo } from "../../../components/ui/Typo"
import { Container } from "../../../components/ui/Container"
import { Link } from "../../../components/ui/Link"
import * as SC from "./styles"
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice"
import { ModalWrapper } from "../../../components/ui/Modal/ModalWrapper"
import { Modal } from "../../../components/ui/Modal/Modal"
import { ModalText } from "../../../components/ui/Modal/ModalText"
import { ModalContent } from "../../../components/ui/Modal/ModalContent"
import { Button } from "../../../components/ui/Button"
import { Loader } from "../../../components/ui/Loader"

export const DetailPostPage = () => {
    const { id } = useParams()
    const {list} = useSelector((state) => state.posts.posts)
    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const postForView = useSelector((state) => state.posts.postForView)
    const [postForDelete, setPostForDelete] = useState(null)
   

    const showEditAndDeleteBtn = list && user

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
        return<Container>
            <Loader />
        </Container>
    }

    if(!postForView.post || !postForView.post.hasOwnProperty("id")) {
        return<>Пост не найден</>
    }

    const { post } = postForView

    const image = post.image || "https://i.pinimg.com/736x/b2/1a/9f/b21a9ff51a2b511b3680603887147f01.jpg"

    return<Container>
        { postForDelete &&
            <ModalWrapper>
                <Modal>
                    <ModalText>Вы уверены, что хотите удалить этот пост (id-{postForDelete.id})?</ModalText>
                    <ModalContent>
                        <Button onClick={() => setPostForDelete(null)}>Нет</Button>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                    </ModalContent>
                </Modal>
            </ModalWrapper>
        }
        <Typo>{post.title}</Typo>
        <SC.Image src={image} alt={post.title}/>
        <SC.Text>{post.body}</SC.Text>
        <div style={{clear: "both"}}/>
        <SC.LinkWrapper>
            <Link to="/posts/">Назад</Link>
            {showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>}
            {showEditAndDeleteBtn && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
        </SC.LinkWrapper>
    </Container> 
}