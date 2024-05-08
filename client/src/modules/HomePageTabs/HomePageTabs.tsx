import { FC } from "react";

import TabContent from "../../components/tabContent/TabContent";
import Tab from "../../UI/tab/Tab";

import "./homePageTabs.scss";

const HomePageTabs : FC = () => {
    return (
        <section className="home-page__tabs">
            <TabContent>
                <div className="tab_container">
                    <Tab variant="success" width={"30vw"} title="Home" />
                    <Tab variant="warning" width={"30vw"} title="About" />
                    <Tab width={"30vw"} title="Contact" />
                </div>

                <div className="tab_container tab_container-large">
                    <Tab width={"47%"} height={600} title="" />
                    <Tab width={"47%"} height={600} title="" />
                </div>
            </TabContent>
        </section>
    )
}

export default HomePageTabs;