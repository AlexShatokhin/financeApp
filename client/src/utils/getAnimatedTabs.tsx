import { Transition, SwitchTransition } from 'react-transition-group';
import { MenuTabs } from "../types/menuTabs";
import HomePageTabs from "../modules/HomePageTabs/HomePageTabs"
import AboutTabs from "../modules/AboutTabs/AboutTabs";
import ContactContent from '../modules/ContactContent/ContactContent';

type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';

const duration = 100;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


export default function getAnimatedTabs(activeTab: string) : React.ReactNode {

    const getTab = () => {
        switch(activeTab) {
            case MenuTabs.Home: return <HomePageTabs />;
            case MenuTabs.About: return <AboutTabs />;
            case MenuTabs.Contact: return <ContactContent />;
            default: return <HomePageTabs />;
        }
    }

    return (
        <SwitchTransition>
        <Transition key={activeTab} timeout = {duration}>
            {(state: TransitionStatus) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {getTab()}
                </div>
            )}
        </Transition>
    </SwitchTransition>
    )

}