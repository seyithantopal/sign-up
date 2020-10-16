import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Users';
import 'antd/dist/antd.css';
import { Table, Row, Col, Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Dashboard = () => {
	const [users, setUsers] = useContext(UserContext);

	// States
	const [searchText, setSearchText] = useState('');
	const [searchedColumn, setSearchedColumn] = useState('');
	const searchInput = useRef(null);

	// Search
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText('');
	};

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex]
				? record[dataIndex]
						.toString()
						.toLowerCase()
						.includes(value.toLowerCase())
				: '',
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current.select(), 100);
			}
		},
	});

	// Columns
	const columns = [
		{
			title: 'First Name',
			width: 100,
			dataIndex: 'firstname',
			key: 'firstname',
		},
		{
			title: 'Gender',
			width: 100,
			dataIndex: 'gender',
			key: 'gender',
		},
		{
			title: 'Location',
			width: 100,
			dataIndex: 'location',
			key: 'location',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			width: 150,
			...getColumnSearchProps('email'),
		},
	];

	const data = [];
	users.map((user, i) => {
		data.push({
			key: i,
			firstname: user.firstname,
			gender: user.gender,
			location: user.location,
			email: user.email,
		});
	});
	return (
		<>
			<Row>
				<Col span={24}>
					<Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Link to="/">
						<Button type="primary" style={{ height: 50 }}>
							Back to Sign Up Form
						</Button>
					</Link>
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
