import React from 'react'

interface IFormProps {
    initialValues?:object;
    onFinish?:(e:React.FormEvent)=>void;
}
const Form:React.FC<IFormProps> = ({initialValues,onFinish})=> {
    return (
        <form>
           Form 
        </form>
    )
}
export default  Form;
