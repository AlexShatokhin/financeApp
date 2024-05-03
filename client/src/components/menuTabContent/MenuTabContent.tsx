import { FC, useState } from "react";

import { tabItemsData } from "./data/tabItemsData";

import MenuTabItem from "../../UI/menuTabItem/MenuTabItem";

import "./menuTabContent.scss";
const MenuTabContent : FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Home");

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
        
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