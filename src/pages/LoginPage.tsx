import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {
  const [type, setType] = useState(true); // true - вход, false - регистрация
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  interface LoginPageForms{
    placeholder: string,
    type: 'text' | 'password' | 'email'
  }
  const { name } = useParams<{ name: string; }>();
  const login : LoginPageForms[] = [
    {
      placeholder: "Email",
      type: 'email',
    },
    {
      placeholder: "Пароль",
      type: 'password'
    },
  ]
  const register : LoginPageForms[] = [
    ...login,
    {
      placeholder: "Повторите пароль",
      type: "password"
    }
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList className="profileList loginPage">
          <h3 onClick={() => { setType(true) }} className={type ? "active" : ""}>Вход</h3>
          <h3 onClick={() => { setType(false) }} className={type ? "" : "active"}>Регистрация</h3>
          {
            type ? 
            login.map((val, idx, arr) => {
              return(
                <IonItem lines='none' key={idx}>
                  <IonInput type={val.type} placeholder={val.placeholder}></IonInput>
                </IonItem>
              )
            })
            :
            register.map((val, idx, arr) => {
              return(
                <IonItem lines='none' key={idx}>
                  <IonInput type={val.type} placeholder={val.placeholder}></IonInput>
                </IonItem>
              )
            })
          }
          <IonButton>{type ? "Войти" : "Зарегистрироваться"}</IonButton>
          <hr className='line' />
          <IonButton className="gosuslugi">Госуслуги</IonButton>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Page;
