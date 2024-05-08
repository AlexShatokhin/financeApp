import { useTypedSelector } from '../../hooks/useTypedSelector';
import MenuTabContent from '../../components/menuTabContent/MenuTabContent';
import getNeededTabs from '../../utils/getNeededTabs';

import './App.css';
function App() {

	const activeTab = useTypedSelector(state => state.MenuTabContentReducer.activeTab);

	return (
		<div className="App">
			<MenuTabContent />
			{getNeededTabs(activeTab)}
		</div>
	);
}

export default App;
