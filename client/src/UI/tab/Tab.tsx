import { FC } from "react";

import "./tab.scss";

type TabProps = {
    variant?: "default" | "success" | "warning" | "violet";
    width?: number | string;
    height?: number | string;
}
const Tab : FC<TabProps> = ({variant = "default", width = 300, height = 150}) => {
    return (
        <section style={{width, height}} className = {`tab_item tab_item-${variant}`}>
            
        </section>
    )
}

export default Tab;