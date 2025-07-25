import { useState, useEffect } from 'react';
import { Container } from "../../ui/Container"
import { SearchRow } from "./styles"

export const FilterByName = ({posts, setFilteredPosts}) => { 
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (event) => {
        const newValue = event.target.value
        setSearchValue(newValue)
    }

    useEffect(() => {
        if (searchValue) {
        const filtered = posts.filter(post => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredPosts(filtered)
        } else {
        setFilteredPosts(posts)
        }
    }, [searchValue, posts, setFilteredPosts])



    return (
        <Container>
                <SearchRow type="text" placeholder="Поиск" id="js-search-row" value={searchValue} onChange={handleChange}/>
        </Container>
    )
}


