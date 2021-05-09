import React from 'react'
import { Button, Input } from 't-ui'
const { TextArea,Password } = Input
export default function DomTabs() {
    return (
        <div>
            <Input defaultValue="33" ></Input>
            <Input disabled style={{ margin: '0 10px' }} placeholder="禁用"></Input>
            <Input prepend={<div>prepend</div>} placeholder="前标签"></Input>
            <Input append={<div style={{ padding: '0 10px' }}>append</div>} style={{ margin: '0 10px' }} placeholder="后标签"></Input>
            <Input
                size="large"
                append={
                    <Button loading
                        size="large"
                        style={{
                            margin: 0,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0

                        }} >loading</Button>
                } style={{ margin: '0 10px' }} placeholder="搜索值"></Input>
            <Input
                size="middle"
                append={
                    <Button
                        size="middle"
                        style={{
                            margin: 0,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0

                        }} >loading</Button>
                } style={{ margin: '0 10px' }} placeholder="搜索值"></Input>
            <Input
                size="middle"
                append={
                    <Button loading style={{
                        margin: 0,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0

                    }} size="middle">loading</Button>
                } style={{ margin: '0 10px' }} placeholder="后标签"></Input>
            <Input append={
                <Button loading style={{
                    margin: 0,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                }}>loading</Button>
            } style={{ margin: '5px 10px' }} placeholder="后标签"></Input>

            <TextArea style={{ margin: '5px 10px' }}
                placeholder="输入框"
                defaultValue="输入框55"
            ></TextArea>
             <TextArea style={{ margin: '5px 10px' }}
                disabled
                placeholder="输入框"
            ></TextArea>

            <Password style={{ margin: '5px 10px' }} defaultValue="343432"></Password>
            <Password style={{ margin: '5px 10px' }} size="middle" visibilityToggle></Password>
            <Password style={{ margin: '5px 10px' }} size="large" disabled></Password>
        </div>
    )
}
