import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setActiveTab } from "./slice/MenuTabContentSlice";

import { tabItemsData } from "./data/tabItemsData";
import MenuTabItem from "../../UI/menuTabItem/MenuTabItem";

import "./menuTabContent.scss";
const MenuTabContent : FC = () => {
    const dispatch = useDispatch();
    const activeTab = useTypedSelector(state => state.MenuTabContentReducer.activeTab);

    const handleTabChange = (tabName: string) => {
        dispatch(setActiveTab(tabName));
        
        const activeTabBorder = document.querySelector(".menu-container_border") as HTMLElement;
        activeTabBorder.style.left = 80 + tabItemsData.indexOf(tabName)*180 + "px";
    }

    const renderMenuTabItems = () => {
        return tabItemsData.map((tabName, index) => {
            return (
                <MenuTabItem 
                    key={index}
                    title={tabName}
                    isActive={activeTab === tabName}
                    onClick={() => handleTabChange(tabName)}
                />
            )
        })
    }

    return (
        <nav className="menu-container">
            {renderMenuTabItems()}
            <div className="menu-container_border"></div>
        </nav>
    )
}

export default MenuTabContent;