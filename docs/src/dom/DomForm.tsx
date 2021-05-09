import Field from '@t-ui/Form/src/Field'
import React from 'react'
import { Button, Form, Input } from 't-ui'
export default function DomForm() {
    return (
        <div>
            <Input label="test"></Input>
            <Form

                initialValues={{ username: '', password: '' }}
                onFinish={values => {
                    console.log('完成:', values);
                }}
            >
                <Field name="username">
                    <Input label="用户名" defaultValue="3"/>
                </Field>
                <Field name="passowrd2">
                    <Input.Password label="密码"/>
                </Field>
                <Field name="passowrd">
                    <input style={{ border: 'solid 1px red',margin:' 10px' }}></input>
                </Field>
                <Button>提交</Button>
            </Form>
        </div>
    )
}
