import { useId, useState } from "react";
import { Container } from "../../components/ui/Container/styles";
import { Typo } from "../../components/ui/Typo";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
    const [formValues, setFormvalues] = useState({name: "" , surname: "", email: "", password: ""})
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        try{
            const users = JSON.parse(localStorage.getItem("users"))
            const userId = Date.now()
            const newUser = { ...formValues, id: userId}

            if (!users) {
                localStorage.setItem("users", JSON.stringify([newUser]))
                alert("Вы успешно зарегистрировались")
                navigate('/auth')
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert("Пользователь с таким email уже существует")
                return
            }

            users.push(newUser)

            localStorage.setItem("users", JSON.stringify(users))

            alert("Вы успешно зарегистрировались")

            navigate("/auth")

        } catch (e) {
            console.log(e)
        }
    }
     const onChange = (name, value) => {
        setFormvalues({...formValues, [name]: value})
    }

    const disabled = !formValues.name || !formValues.surname || !formValues.email || !formValues.password

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text" 
                        name="name" 
                        value={formValues.name}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Имя"
                    />
                </Field>
                <Field>
                    <Input
                        type="text" 
                        name="surname" 
                        value={formValues.surname}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Фамилия"
                    />
                </Field>
                <Field>
                    <Input
                        type="email" 
                        name="email" 
                        value={formValues.email}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Эл.почта"
                    />
                </Field>
                <Field>
                    <Input
                        type="password" 
                        name="password" 
                        value={formValues.password}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                        placeholder="Пароль"
                    />
                </Field>
                <button type="submit" disabled= {disabled}>Зарегистрироваться</button>
            </Form>
        </Container>
    )
}