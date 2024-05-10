import { FC } from "react";

import "./tab.scss";

type TabProps = {
    variant?: "default" | "success" | "warning" | "violet";
    width?: number | string;
    height?: number | string;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode | React.ReactNode[];
}
const Tab : FC<TabProps> = ({variant = "default", width = 300, height = 150, title = "Title", subtitle = "Subtitle", children}) => {
    return (
        <section style={{width, height}} className = {`tab_item tab_item-${variant}`}>
            <div className="tab_item-text">
                <div className="tab_item-title">{title}</div>
                <div className="tab_item-subtitle">{subtitle}</div>
            </div>
            <div className="tab_item-content">
                {children}
            </div>
        </section>
    )
}

export default Tab;