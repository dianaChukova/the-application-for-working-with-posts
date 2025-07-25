import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { showPost, deletePost } from "../../redux/slices/postsSlice"
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";
import { FilterByName } from "../../components/Filters/FilterByName";


export const MainPage = () => {
    const dispatch = useDispatch()
    const { post: viewedPost } = useSelector((state) => state.posts.postForView)
    const { posts, loading } = useSelector((state) => state.posts.freshPosts)
    const [filteredPosts, setFilteredPosts] = useState([])

    const onDeletePost = (postId) => {
        dispatch(deletePost({ id: postId }))
        dispatch(showPost(null))
    }
    
    useEffect(() => {
        if (!posts) {
            dispatch(getFreshPosts()) 
        }
    }, [dispatch, posts]) 


    const shouldShowViewedPost = viewedPost && posts?.some(p => p.id === viewedPost.id) && viewedPost.title && viewedPost.body

    return (
        <Container>
            {loading && <Loader />}
            {posts && ( 
                <>
                    <Typo>Новые публикации</Typo>
                    <FilterByName posts={posts} setFilteredPosts={setFilteredPosts} />
                    <Posts posts={filteredPosts} onDeletePost={onDeletePost}/>  
                </>
            )}
            {shouldShowViewedPost && (  
                <>
                    <Typo>Последний просмотренный пост</Typo>
                    <Posts posts={[viewedPost]} />
                </>
            )}
        </Container>
    )
}
