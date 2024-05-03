import { FC } from "react";

import "./menuTabItem.scss";

type MenuTabItemProps = {
    isActive?: boolean;
    title: string;
    onClick?: () => void;
}

const MenuTabItem : FC<MenuTabItemProps> = ({isActive = false, title, onClick}) => {
    return (
        <div onClick={onClick} className="menu_item">
            <span className={isActive ? "menu_item-text menu_item-text-active" : "menu_item-text"}>{title}</span>
        </div>
    )
}

export default MenuTabItem;