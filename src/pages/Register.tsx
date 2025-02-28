import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import {
  checkmarkDoneCircle,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Registered!");
    router.goBack();
  };

  const handleRegister = () => {
    console.log("Registration successful@!")
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
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
                      Create My account
                      <IonIcon
                        icon={checkmarkDoneCircle}
                        slot="end"
                        size="medium"
                      ></IonIcon>
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
