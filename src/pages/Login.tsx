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
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline } from "ionicons/icons";
import loginImage from "../assets/login-svgrepo-com (1).svg";
import IntroPage from "../components/Intro";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [ present , dismiss] = useIonLoading();

  const handleRegister = () => {
    console.log("Registration started!");
    // router.push('/home');
  };

  const doLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await present('Logging in....');
    setTimeout(() => {
        dismiss();
        router.push('/app', 'root');
    }, 2000)
  };

  const finishIntro = async() => {
    console.log("Intro Finished!");
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: 'true' });
  };

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log('Seen value :', seen);
      setIntroSeen(seen.value === 'true');
    };
    checkStorage();
  }, []);

  const watchIntroAgain = () => {
    setIntroSeen(false);
    Preferences.set({key: INTRO_KEY, value: 'false'});
  }

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
                  <IonButton
                    type="button"
                    size="small"
                    color={"medium"}
                    className="ion-margin-top"
                    fill="clear"
                    expand="full"
                    onClick={watchIntroAgain}
                  >Watch intro again</IonButton>
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
