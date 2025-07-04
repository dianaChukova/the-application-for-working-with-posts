import { useState } from "react"
import { Container } from "../../../../components/Container"
import { Typo } from "../../../../components/Typo"
import * as SC from "./styles"
import { useDispatch } from "react-redux"
import { addPost } from "../../../../redux/slices/postsSlice"

const DEFAULT_VALUES = {title: "", body: ""}

export const PostForm = () => {
    const dispatch = useDispatch()
    const [formValues, setFormvalues] = useState(DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormvalues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(formValues))
        setFormvalues(DEFAULT_VALUES)
    }

    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <Typo>Добавление нового поста</Typo>
            <SC.Form onSubmit={onSubmit}>
                <SC.Field>
                    <SC.Input 
                        type="text" 
                        name="title" 
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Заголовок"
                    />
                </SC.Field>
                <SC.Field>
                    <SC.Textarea 
                        name="body" 
                        rows={10} cols={30}
                        value={formValues.body}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Текст" 
                    />
                </SC.Field>
                <SC.Button type="submit" disabled={disabled} >Сохранить</SC.Button>
            </SC.Form>
        </Container>
    )
}

