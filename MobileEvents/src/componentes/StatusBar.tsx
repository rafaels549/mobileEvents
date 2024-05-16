import React, {useState} from 'react';
import {

  SafeAreaView,
  StatusBar,
 
} from 'react-native';
import type {StatusBarStyle} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const Bar = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

 

  return (
   
      <StatusBar
        animated={true}
        backgroundColor="#f4511e"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden= {false}
      />
    
   
  );
};



export default Bar;