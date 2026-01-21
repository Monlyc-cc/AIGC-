import React, { useRef, useState } from 'react'
import { NavBar, Button, Input, List, Form, Toast } from 'antd-mobile'
import axios from '../../http'
export default function PasswordSetting({ back, account }) {
    const [form] = Form.useForm()
    const updatePassword = async () => {
        const { old_password, new_password, confirm_password } = onSubmit()
        //验证原密码是否正确
        const url = '/api/mine/updatePassword'
        const res = await axios.post(url, {
            old_password,
            new_password,
            confirm_password
        })
        console.log(res);
        if (res?.data?.code) {
            Toast.show({
                icon: 'success',
                content: '更新成功'
            })
        }


    }
    const onSubmit = () => {
        const values = form.getFieldsValue()
        return values
    }
    const default_values = {
        account: account,
        old_password: '',
        new_password: '',
        confirm_password: '',
    }
    const [values, setValues] = useState(default_values)
    const formRef = useRef()
    return (
        <div>
            <NavBar right={<Button
                loading='auto'
                onClick={updatePassword}
                color='success'
                fill='solid'
                size='small'
            >完成</Button>} onBack={
                () => {
                    back()
                    formRef.current?.resetFields()
                }
            }>更改密码</NavBar>

            <Form
                ref={formRef}
                form={form}
                layout='horizontal'
                mode='card'
                initialValues={values}>
                <Form.Header>设置新的密码</Form.Header>
                <Form.Item name='account' disabled label='手机号'>
                    <Input placeholder={account} />
                </Form.Item>
                <Form.Item name='old_password' label='原密码'>
                    <Input placeholder='请输入原密码' />
                </Form.Item>
                <Form.Item name='new_password' label='新密码'>
                    <Input placeholder='请输入新密码' />
                </Form.Item>
                <Form.Item name='confirm_password' label='确认密码'>
                    <Input placeholder='请再次填写确认' />
                </Form.Item>
            </Form>
        </div>

    )
}
