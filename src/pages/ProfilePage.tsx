import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {

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
                <IonList className="profileList">
                    <h1><b>Личный профиль</b></h1>
                    <IonItem lines='none'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" slot='start' />
                        <p>100 баллов</p>
                    </IonItem>
                    <h2><b>ФИО</b></h2>
                    <IonItem lines='none'>
                        <IonInput placeholder="ФИО"></IonInput>
                    </IonItem>
                    <h2><b>Номер телефона</b></h2>
                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="Номер телефона"></IonInput>
                    </IonItem>

                    <h2><b>Пол</b></h2>
                    <IonItem lines='none'>
                        <IonSelect value="1">
                            <IonSelectOption value="1">Мужской</IonSelectOption>
                            <IonSelectOption value="0">Женский</IonSelectOption>
                        </IonSelect>

                    </IonItem>
                    <h2><b>Электронная почта</b></h2>
                    <IonItem lines='none'>
                        <IonInput type='email' placeholder="Email@mail.ru"></IonInput>
                    </IonItem>

                    <h2><b>Реквизиты</b></h2>
                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="ИНН"></IonInput>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="Корреспондентский счёт"></IonInput>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="Расчётный счет"></IonInput>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="БИК"></IonInput>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="Корреспондентский счёт"></IonInput>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonInput type='number' placeholder="КПП"></IonInput>
                    </IonItem>

                    <h2><b>Серия паспорта</b></h2>
                    <IonItem lines='none'>
                        <IonInput type='number' max='9999'></IonInput>
                    </IonItem>

                    <h2><b>Номер паспорта</b></h2>
                    <IonItem lines='none'>
                        <IonInput type='number' max='999999'></IonInput>
                    </IonItem>

                    <h2><b>Кем выдан</b></h2>
                    <IonItem lines='none'>
                        <IonInput placeholder="Кем выдан"></IonInput>
                    </IonItem>

                    <h2><b>Когда выдан</b></h2>
                    <IonItem lines='none'>
                        <IonInput placeholder="Когда выдан"></IonInput>
                    </IonItem>
                    <br />
                    <IonButton>Редактировать</IonButton>
                    <IonButton>Выход</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
