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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route component={Register} path="/register" exact/>
        <Route exact path="/">
          <Login />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

// import { useEffect } from "react";
// import { StatusBar, Style } from "@capacitor/status-bar";
// import { Capacitor } from "@capacitor/core";
// import { IonApp, IonRouterOutlet } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";
// import Register from "./pages/Register";
// import { Route } from "react-router";
// import Login from "./pages/Login";

// const App: React.FC = () => {
//   useEffect(() => {
//     const configureStatusBar = async () => {
//       if (Capacitor.isNativePlatform()) {
//         try {
//           await StatusBar.setOverlaysWebView({ overlay: false }); // Prevents overlap
//           await StatusBar.setStyle({ style: Style.Light }); // Light or Dark mode
//         } catch (error) {
//           console.error("Error configuring status bar:", error);
//         }
//       }
//     };

//     configureStatusBar();
//   }, []);

//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonRouterOutlet>
//           <Route component={Register} path="/register" exact />

//           <Route exact path="/">
//             <Login />
//           </Route>
//         </IonRouterOutlet>
//       </IonReactRouter>
//     </IonApp>
//   );
// };

// export default App;
