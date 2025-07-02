import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 7,
            title: 'Post 7',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
        {
            id: 6,
            title: 'Post 6',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
        {
            id: 5,
            title: 'Post 5',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
        {
            id: 1,
            title: 'Post 1',
            image: 'https://avatars.mds.yandex.net/get-yapic/29310/RJsfWQOtUOe0TfYz45DAiQ4gd0-1/orig',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero praesentium excepturi facilis inventore repellendus accusamus quibusdam officia labore exercitationem quod qui obcaecati veniam, soluta error officiis dicta tempore eum."
        },
    ],
    postForView: null,
    freshPosts: null
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts: (state, action) => {
            state.list = action.payload
        },
        editPost: (state, actoin) => {

        },
        getPost: (state, action) => {
            state.postForView = state.list.find((item) => item.id === action.payload)
            
        },
        getFreshPosts: (state) => {
            state.freshPosts = state.list.slice(0,3)

        },
        addPost: (state, action) => {
            
        },
    }
})

export const {setPosts, editPost, getPost, addPost, getFreshPosts} = postsSlice.actions

export default postsSlice.reducer