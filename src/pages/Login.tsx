import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline } from "ionicons/icons";
// import img from '../assets/strawberry-svgrepo-com (1).svg';
import loginImage from "../assets/login-svgrepo-com (1).svg";
import IntroPage from "../components/Intro";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);
  const handleRegister = () => {
    console.log("Registration started!");
    // router.push('/home');
  };

  const doLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("doLogin");
  };

  const finishIntro = async() => {
    console.log("Intro Finished!");
    setIntroSeen(true);
    // Preferences.set({ key: INTRO_KEY, value: 'true' });
  };

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log('Seen value :', seen);
      setIntroSeen(seen.value === 'true');
    };
    checkStorage();
  }, []);

  return (
    <>
      {!introSeen ? (
        <>
          <Intro onFinish={finishIntro}/>
        </>
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"primary"}>
              <IonTitle>Login page</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="ion-padding">
            <div className="ion-text-center ion-padding">
              <img width={"50%"} src={loginImage} alt="Test Image" />
            </div>
            <IonCard>
              <IonCardContent>
                <form onSubmit={doLogin}>
                  <IonInput
                    label="Email"
                    type="email"
                    labelPlacement="floating"
                    clearInput={true}
                    fill="outline"
                  ></IonInput>
                  <IonInput
                    className="ion-margin-top"
                    label="Password"
                    type="password"
                    labelPlacement="floating"
                    clearInput={true}
                    fill="outline"
                  ></IonInput>
                  <IonButton
                    type="submit"
                    className="ion-margin-top"
                    fill="solid"
                    expand="full"
                  >
                    Login
                    <IonIcon
                      icon={logInOutline}
                      slot="end"
                      size="medium"
                    ></IonIcon>
                  </IonButton>
                  <IonButton
                    type="button"
                    routerLink="/register"
                    color="secondary"
                    className="ion-margin-top"
                    fill="solid"
                    expand="full"
                    onClick={handleRegister}
                  >
                    Create account
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      )
    }
    </>
  );
};

export default Login;
