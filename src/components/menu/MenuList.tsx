import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { HomeOutlined, BarsOutlined } from '@ant-design/icons';
import useStore from "@/hooks/useStore";

const items: MenuProps["items"] = [
	{ label: '工作台', key: '/', icon: <HomeOutlined /> },
	{
		label: '商品管理', key: 'GoodsManager', icon: <BarsOutlined />,
		children: [
			{ label: '商品列表', key: '/goods', },
		]
	},
	{
		label: '订单管理', key: 'OrderManager', icon: <BarsOutlined />,
		children: [
			{ label: '订单列表', key: '/orders', },
		]
	},
	{
		label: '用户管理', key: 'UserManager', icon: <BarsOutlined />,
		children: [
			{ label: '用户列表', key: '/users' },
		]
	}
]

const MenuList = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [selectedKeys, setSelectedKeys] = useStore("menu_selected_keys", ["/home"])
	const [openKeys, setOpenKeys] = useStore("menu_open_keys", [] as string[])

	const openRoute = ({ key, keyPath }: { key: string, keyPath: string[] }) => {
		if (key.startsWith("/")) {
			setSelectedKeys(keyPath)
			navigate(`${key}`);
		}
	}

	const onOpenChange = (openKeys: string[]) => {
		setOpenKeys(openKeys)
	}

	// 监听路由变化
	React.useEffect(() => {
		console.log("监听路由变化:",location.pathname)
	}, [location.pathname])

	return (
		<Menu 
			theme="dark" 
			mode="inline" 
			onClick={openRoute}
			selectedKeys={selectedKeys} 
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			items={items} 
		/>
	)
}

export default MenuList