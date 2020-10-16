import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header } = Layout;

const HeaderSection = () => {
	return (
		<>
			<Layout>
				<Header className="header">
					<Title style={{ color: '#fff' }} level={4}>
						Powr of You - Sign Up Form Test
					</Title>
				</Header>
			</Layout>
		</>
	);
};

export default HeaderSection;
