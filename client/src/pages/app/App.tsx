import { useTypedSelector } from '../../hooks/useTypedSelector';
import MenuTabContent from '../../components/menuTabContent/MenuTabContent';
import getAnimatedTabs from '../../utils/getAnimatedTabs';

import './App.css';



function App() {

	const activeTab = useTypedSelector(state => state.MenuTabContentReducer.activeTab);

	return (
		<div className="App">
			<MenuTabContent />
			{getAnimatedTabs(activeTab)}
		</div>
	);
}

export default App;
