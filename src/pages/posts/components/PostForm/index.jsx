import { useState } from "react"
import { Container } from "../../../../components/ui/Container"
import { Typo } from "../../../../components/ui/Typo"
import * as SC from "./styles"
import { Form } from "../../../../components/ui/Form"
import { Field } from "../../../../components/ui/Field"
import { Input } from "../../../../components/ui/Input"

const DEFAULT_VALUES = {title: "", body: ""}

export const PostForm = ({title, onSubmitForm, defaultValues}) => {
    const [formValues, setFormvalues] = useState(defaultValues || DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormvalues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(formValues)
       !defaultValues && setFormvalues(DEFAULT_VALUES)
    }

    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text" 
                        name="title" 
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Заголовок"
                    />
                </Field>
                <Field>
                    <SC.Textarea 
                        name="body" 
                        rows={10} cols={30}
                        value={formValues.body}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Текст" 
                    />
                </Field>
                <SC.Button type="submit" disabled={disabled} >Сохранить</SC.Button>
            </Form>
        </Container>
    )
}

