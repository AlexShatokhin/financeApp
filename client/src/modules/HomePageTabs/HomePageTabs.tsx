import { FC } from "react";

import BarChart from "./charts/BarChart";
import DoughnutChart from "./charts/DoughnutChart";

import TabContent from "../../components/tabContent/TabContent";
import Tab from "../../UI/tab/Tab";

import "./homePageTabs.scss";


const HomePageTabs : FC = () => {
    return (
        <section className="home-page__tabs">
            <TabContent>
                <div className="tab_container">
                    <Tab variant="success" width={"29vw"} title="Home" />
                    <Tab variant="warning" width={"29vw"} title="About" />
                    <Tab width={"29vw"} title="Contact" />
                </div>

                <div className="tab_container tab_container-large">
                    <Tab width={"47%"} height={600} title="" subtitle="">
                        <DoughnutChart />
                    </Tab>
                    <Tab width={"47%"} height={600} title="" >
                        <BarChart />
                    </Tab>
                </div>
            </TabContent>
        </section>
    )
}

export default HomePageTabs;