import {Form, Formik} from "formik";
import * as Yup from 'yup';
import '../styles/styles.css';
import {MyTextInput} from "../components";

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required('Requerido')
                            .min(2, 'El nombre de ser de 3 caracteres o más')
                            .max(15, 'El nombre debe ser menor a 15 caracteres'),
                        email: Yup.string()
                            .required('Requerido')
                            .email('Revise el formato del correo'),
                        password1: Yup.string()
                            .required('Requerido')
                            .min(6, 'mínimo 6 caracteres'),
                        password2: Yup.string()
                            .required('Requerido')
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales'),
                    })
                }
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            type="text"
                            placeholder="Tu nombre"
                        />
                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Tu email"
                        />
                        <MyTextInput
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="Tu password"
                        />

                        <MyTextInput
                            label="Repetir password"
                            name="password2"
                            type="password"
                            placeholder="Repetir password"
                        />

                        <button type="submit">Create</button>
                        <button
                            type="button"
                            onClick={handleReset}
                        >Reset Form</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

