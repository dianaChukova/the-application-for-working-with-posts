const deletedPostIds = new Set()

export const postsAPI = {
    async fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=20')
            const posts = await response.json()
            return posts.filter(post => !deletedPostIds.has(post.id))
        } catch (ex) {
            console.error('Fetch posts error:', ex)
            throw ex
        }
    },

    async fetchById(id) {
        try {
            if (!id) throw new Error('Invalid ID')
            
            if (deletedPostIds.has(id)) {
                throw new Error('Post was deleted')
            }

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return await response.json()
        } catch (ex) {
            console.error('Fetch by ID error:', ex)
            throw ex
        }
    },
    
    async fetchFreshPosts(limit = 20) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
            const posts = await response.json() 
            return posts.filter(post => !deletedPostIds.has(post.id))
        } catch (ex) {
            console.error('Fetch fresh posts error:', ex)
            throw ex
        }
    },

    deletePost(id) {
        deletedPostIds.add(id)
        return Promise.resolve()
    }
}





 