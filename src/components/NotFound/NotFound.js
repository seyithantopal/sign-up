import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import Title from 'antd/lib/typography/Title';

const NotFound = () => {
	return (
		<Row
			type="flex"
			justify="center"
			align="middle"
			style={{ minHeight: 'calc(100vh - 100px)' }}
		>
			<Col span={6} type="flex" justify="center" align="middle">
				<Title level={1}>404 Not Found!</Title>
			</Col>
		</Row>
	);
};

export default NotFound;
