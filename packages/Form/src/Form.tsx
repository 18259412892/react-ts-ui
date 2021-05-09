import React from 'react'
import FieldContext from './FieldContext';
import  useForm from './useForm.jsx';

interface IFormProps {
    initialValues?: object;
    onFinish?: (e: React.FormEvent) => void;
    children?: React.ReactNode
}
const Form: React.FC<IFormProps> = ({ initialValues, onFinish, children }) => {
    const formInstance = useForm();
    formInstance.setCallbacks({
        onFinish
    })
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                formInstance.submit()
            }}
        >
            Form
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}
export default Form;
