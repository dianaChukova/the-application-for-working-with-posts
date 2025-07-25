import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsAPI } from "../../api/postsAPI";

const initialState = {
    posts: {
        list: null,
        loading: false
    },
    postForView: {
        post: null,
        loading: false
    },
    freshPosts: {
        posts: null,
        loading: false
    }
}

 export const getPostById = createAsyncThunk(
    "posts/fetchById",
    async (postId) => {
        return await postsAPI.fetchById(postId)
    }
)

 export const getPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        return await postsAPI.fetchPosts()
    }
)

 export const getFreshPosts = createAsyncThunk(
    "posts/fetchFreshPosts",
    async (limit) => {
        return await postsAPI.fetchFreshPosts(limit)
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            const updatedPost = action.payload
            ['list', 'posts'].forEach(key => {
                if (state.posts[key]) {
                    state.posts[key] = state.posts[key].map(post => 
                        post.id === updatedPost.id ? updatedPost : post
                    )
                }
            })
            
            if (state.postForView.post?.id === updatedPost.id) {
                state.postForView.post = updatedPost
            }
        },
        
        addPost: (state, action) => {
            const newPost = {
                ...action.payload,
                id: new Date().getTime()
            }
            
            if (state.posts.list) {
                state.posts.list = [newPost, ...state.posts.list]
            }
            if (state.freshPosts.posts) {
                state.freshPosts.posts = [newPost, ...state.freshPosts.posts]
            }
        },
        
        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        },
        
        deletePost: (state, action) => {
            const postId = action.payload.id
            
            if (state.posts.list) {
                state.posts.list = state.posts.list.filter(post => post.id !== postId)
            }
            if (state.freshPosts.posts) {
                state.freshPosts.posts = state.freshPosts.posts.filter(post => post.id !== postId)
            }
            
            if (state.postForView.post?.id === postId) {
                state.postForView = {
                    post: null,
                    loading: false
                }
            }
        }
    },
    
    extraReducers: (builder) => {
        builder.addCase(getPostById.pending, (state) => {
            state.postForView.loading = true
        })
        
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        })
        
        builder.addCase(getPosts.pending,(state, action) => {
            state.posts = {
               list: null,
               loading: true
            }
        })
        builder.addCase(getPosts.fulfilled,(state, action) => {
            state.posts = {
               list: action.payload,
               loading: false
            }
        })
        builder.addCase(getFreshPosts.pending,(state, action) => {
            state.freshPosts = {
               posts: null,
               loading: true
            }
        })
        builder.addCase(getFreshPosts.fulfilled,(state, action) => {
            state.freshPosts = {
               posts: action.payload,
               loading: false
            }
        })
    }
}) 
    
export const { editPost, addPost, showPost, deletePost } = postsSlice.actions

export default postsSlice.reducer 