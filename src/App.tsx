import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { useEffect } from 'react';
import './theme/android_fixes.css';

setupIonicReact();


const App: React.FC = () => {
  useEffect(() => {
    if (Capacitor.isPluginAvailable('StatusBar') && Capacitor.getPlatform() === 'android') {
      // Keep the status bar visible, but make sure it doesn't overlap content
      StatusBar.setOverlaysWebView({ overlay: false });
      
      // Optional: Set the status bar color to match your app's primary color
      StatusBar.setBackgroundColor({ color: '#3880ff' });
    }
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route component={Register} path="/register" exact/>
          <Route component={Menu} path="/app" exact/>
          <Route exact path="/">
            <Login />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;