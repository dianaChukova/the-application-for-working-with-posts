import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/ui/Typo";
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";

import Pagination from "../../components/Pagination";
import usePagination from "../../components/Pagination/hook/usePagination";

export const PostsPage = () => {
  const { list, loading, error } = useSelector((state) => state.posts.posts)
  const dispatch = useDispatch()
  const itemsPerPage = 5

  const {
    activePage,
    pageCount,
    getPaginatedItems,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    isFirstPage,
    isLastPage,
  } = usePagination(itemsPerPage, list ? list.length : 0)

  useEffect(() => {
    if (!list && !loading && !error) { 
      dispatch(getPosts())
    }

  }, [list, loading, error, dispatch])

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  if (error) {
    return <Container>Ошибка загрузки данных</Container>
  }

  if (!list) {
    return <Container>404</Container>
  }

  const paginatedPosts = getPaginatedItems(list)

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={paginatedPosts} /> 
      <Pagination
        onPageChange={handlePageChange}
        activePage={activePage}
        pageCount={pageCount}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </Container>
  )
};
