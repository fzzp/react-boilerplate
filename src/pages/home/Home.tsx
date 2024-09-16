import { Button } from 'antd';
import { useAppCtx } from "@/hooks/useAppCtx";
import { ActionTypes } from "@/context/AppContext/reducer";

const Home = () => {
	const { dispatch } = useAppCtx()
	return (
		<div>
				<Button type="primary" onClick={()=>dispatch({type: ActionTypes.TRIGGER_MENU_COLLAPSED})}>菜单展开/收缩</Button>
		</div>
	)
}

export default Home


