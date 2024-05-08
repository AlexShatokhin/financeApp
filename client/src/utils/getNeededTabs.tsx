import { MenuTabs } from "../types/menuTabs";
import HomePageTabs from "../modules/HomePageTabs/HomePageTabs"
import AboutTabs from "../modules/AboutTabs/AboutTabs";

export default function getNeededTabs(activeTab: string) : React.ReactNode {
    switch(activeTab) {
        case MenuTabs.Home: return <HomePageTabs />;
        case MenuTabs.About: return <AboutTabs />;
        default: return <HomePageTabs />;
    }
}