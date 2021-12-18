import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './Page.css';

const LoginPage: React.FC = () => {
  var [LogReg, setLoginReg] = useState(1); // 1 - login. 0 - register
  var [Email, setEmail] = useState("");
  var [pass, setPass] = useState("");
  var [rPass, setRPass] = useState("");
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='loginBlock'>
          <IonTitle>
            <p className={LogReg ? "active" : ""} onClick={() => {setLoginReg(1)}}>Вход</p>
            /
            <p className={LogReg ? "" : "active"} onClick={() => {setLoginReg(0)}}>Регистрация</p>
            </IonTitle>
          <IonInput placeholder="Почта" onChange={(e) => {setEmail(e.currentTarget.value?.toString() || "")}}></IonInput>
          <IonInput type='password' placeholder="Пароль" onChange={(e) => {setPass(e.currentTarget.value?.toString() || "")}}></IonInput>
          {
            LogReg ?
              <IonInput placeholder="Подтвердите пароль" onChange={(e) => {setRPass(e.currentTarget.value?.toString() || "")}}></IonInput>
            :
              {}
          }
          {LogReg ? pass !== rPass ? <p>Пароли не сходятся</p> : {} : {}}
          <IonButton placeholder={LogReg ? "Зарегистрироваться" : "Вход"} />
          {LogReg ? <IonButton placeholder='Войти через ГосУслуги' /> : {}}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
