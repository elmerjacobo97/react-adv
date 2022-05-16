import {useFormik} from "formik";
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
            lastName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
            email: Yup.string()
                .email('Dirección de correo electrónico no válida')
                .required('Requerido'),
        })
    });

    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    className={touched.firstName && errors.firstName ? 'has-error' : ''}
                    {...getFieldProps('firstName')}
                />
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    className={touched.lastName && errors.lastName ? 'has-error' : ''}
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    className={touched.email && errors.email ? 'has-error' : ''}
                    {...getFieldProps('email')}
                />
                { touched.email && errors.email && <span>{errors.email}</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
