import { FC } from "react";

import TabContent from "../../components/tabContent/TabContent";
import Tab from "../../UI/tab/Tab";

const AboutTabs : FC = () => {
    return (
        <section className="home-page__tabs">
            <TabContent>
                <div className="tab_container">
                    <Tab variant="success" width={"29vw"} title="Home" />
                    <Tab variant="violet" width={"29vw"} title="Contact" />
                    <Tab variant="warning" width={"29vw"} title="About" />
                </div>

                <div className="tab_container tab_container-large">
                    <Tab width={"100%"} height={600} title="" />
                </div>
            </TabContent>
        </section>
    )
}

export default AboutTabs;