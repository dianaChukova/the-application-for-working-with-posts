import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Typo } from "../../../components/Typo"
import { Container } from "../../../components/Container/styles"
import { Link } from "../../../components/Link"
import * as SC from "./styles"
import { getPostById, showPost } from "../../../redux/slices/postsSlice"

export const DetailPostPage = () => {
    const { id } = useParams()
    const {list} = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

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
        <Typo>{post.title}</Typo>
        <SC.Image src={image} alt={post.title}/>
        <SC.Text>{post.body}</SC.Text>
        <div style={{clear: "both"}}/>
        <SC.LinkWrapper>
            <Link to="/posts/">Назад</Link>
        </SC.LinkWrapper>
    </Container>
}