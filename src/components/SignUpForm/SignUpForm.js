import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/Users';
import 'antd/dist/antd.css';
import './style.css';

import { Form, Input, Select, Row, Col, Button } from 'antd';

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const SignUpForm = () => {
	const [users, setUsers] = useContext(UserContext);
	const history = useHistory();
	const [form] = Form.useForm();

	const onFinish = (values) => {
		const user = {
			firstname: values.firstName,
			gender: values.gender,
			location: values.location,
			email: values.email,
			password: values.password,
		};
		setUsers([...users, user]);
		history.push('/dashboard');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	useEffect(() => {
		function initMap() {
			const autocomplete = new window.google.maps.places.Autocomplete(
				document.getElementById('pac-input'),
			);
			autocomplete.setTypes([]);
		}
		window.addEventListener('load', initMap);
		return () => window.removeEventListener('load', initMap);
	}, []);

	return (
		<>
			<Row
				type="flex"
				justify="center"
				align="middle"
				style={{ minHeight: 'calc(100vh - 100px)' }}
			>
				<Col span={12}>
					<Form
						{...formItemLayout}
						form={form}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="firstName"
							label="First Name"
							rules={[
								{
									required: true,
									message: 'Please input your first name!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="gender"
							label="Gender"
							rules={[{ required: true }]}
						>
							<Select placeholder="Select an option" allowClear>
								<Option value="female">Female</Option>
								<Option value="male">Male</Option>
								<Option value="other">Other</Option>
							</Select>
						</Form.Item>
						<Form.Item
							name="location"
							label="Location"
							rules={[
								{
									required: true,
									message: 'Please input the location info!',
								},
							]}
						>
							<Input id="pac-input" />
						</Form.Item>
						<Form.Item
							name="email"
							label="E-mail"
							rules={[
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								},
								{
									required: true,
									message: 'Please input your E-mail!',
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="password"
							label="Password"
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
							hasFeedback
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name="confirm"
							label="Confirm Password"
							dependencies={['password']}
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please confirm your password!',
								},
								({ getFieldValue }) => ({
									validator(rule, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}

										return Promise.reject(
											'The two passwords that you entered do not match!',
										);
									},
								}),
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Sign Up
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default SignUpForm;
