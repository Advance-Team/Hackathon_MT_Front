import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  useIonModal,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import ProfileImg from "./ProfileImg";
import './Menu.css';
import LoginPage from '../pages/LoginPage';
import { getApiKey } from './storage';

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Новости',
    url: '/News'
  },
  {
    title: 'Документы',
    url: '/Docs',
  },
  {
    title: 'Задания',
    url: '/Tasks',
  },
  {
    title: 'События',
    url: '/Events',
  },
  {
    title: 'Рейтинг',
    url: '/Raiting',
  },
  {
    title: 'Магазин',
    url: '/Shop'
  },
  {
    title: 'О компании',
    url: '/About',
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  var apiKey = "";
  getApiKey().then((val) => {
    apiKey = val?.toString();
  });
  var Name = "Имя"
  var lastName = "Фамилия"
  const [present, dismiss] = useIonModal(LoginPage, {
    count: 1,
  });
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" lines='none'>
          <IonMenuToggle autoHide={false}>
            {
              apiKey ?
                <IonItem className="profileBlock" routerLink='/Profile' routerDirection="none" lines="none" detail={false}>
                  <table>
                    <tr>
                      <td>
                        <ProfileImg imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                      </td>
                      <td className='fioBlock'>
                        <IonListHeader>{Name}</IonListHeader>
                        <IonNote>{lastName}</IonNote>
                      </td>
                    </tr>
                  </table>
                </IonItem>
                :
                <IonItem routerLink='/Login' routerDirection="none" lines="none" detail={false}>
                  <IonLabel>Войти</IonLabel>
                </IonItem>
            }
          </IonMenuToggle>
          <hr className='line' />
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
