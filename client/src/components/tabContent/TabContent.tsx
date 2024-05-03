import { FC } from "react";

import Tab from "../../UI/tab/Tab";

import "./tabContent.scss";
const TabContent : FC = () => {
    return (
        <section className="tab_container tab_container-main">
            <div className="tab_container">
                <Tab 
                    width={400}
                    variant="warning"/>
                <Tab />
                <Tab />
                <Tab 
                    width={400}
                    variant="violet"/>
                <Tab 
                    width={450}
                    variant="success"/>
            </div>
            <div className="tab_container">
                <Tab 
                    width={"40vw"}
                    height={400}/>
                <Tab 
                    width={"40vw"}
                    height={400}/>
            </div>
        </section>
    )
}

export default TabContent;