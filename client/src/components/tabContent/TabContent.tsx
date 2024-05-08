import { FC } from "react";
import "./tabContent.scss";

type TabContentProps = {
    children?: React.ReactNode | React.ReactNode[];
}

const TabContent : FC<TabContentProps> = ({children}) => {
    return (
        <section className="tab_container tab_container-main">
            {children}
        </section>
    )
}

export default TabContent;