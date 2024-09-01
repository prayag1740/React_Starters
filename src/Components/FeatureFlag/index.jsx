import React, { useContext } from 'react'
import { FeatureFlagsContext } from './context'
import LightdarkMode from '../LightDarkMode';
import TicTacToe from '../TicTacToe';
import ColorGenerator from '../ColorGenerator';
import Accordion from '../Accordian';
import TreeView from '../TreeView';
import menus from '../TreeView/data';
import Tabs from '../Tabs';


function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext) ;
    
    const componentsToRender = [
        {
          key: "showLightAndDarkMode",
          component: <LightdarkMode />,
        },
        {
          key: "showTicTacToeBoard",
          component: <TicTacToe />,
        },
        {
          key: "showRandomColorGenerator",
          component: <ColorGenerator />,
        },
        {
          key: "showAccordian",
          component: <Accordion />,
        },
        {
          key: "showTreeView",
          component: <TreeView  menus={menus} />,
        },
        {
            key : 'showTabs',
            component : <Tabs/>
        }
      ];

      if (loading) return <h3>Loading !! Please wait.</h3>

      function checkIfComponent(componentKey) {
        return enabledFlags[componentKey];
      }

      return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((ci) => checkIfComponent(ci.key) ? ci.component : null )}
        </div>
      )
  
}

export default FeatureFlags