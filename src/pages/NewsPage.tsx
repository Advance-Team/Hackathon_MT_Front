import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const NewsPage: React.FC = () => {

    const slideOpts = {
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        speed: 300,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 4000,
        },
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Новости</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Новости</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <img src={"https://picsum.photos/750/500"} />
                        <h2>Что это такое?</h2>
                        <p>
                            Это приложение.   
                        </p>
                    </IonSlide>
                    <IonSlide>
                        <img src={"https://picsum.photos/750/500"} />
                        <h2>Что тут делать?</h2>
                        <p>
                            Учиться, развиваться, проходить тесты, получать баллы, создавать документы.
                        </p>
                    </IonSlide>
                    <IonSlide>
                        <img src={"https://picsum.photos/750/500"} />
                        <h2>Чем это мне поможет?</h2>
                        <p>
                            ЫЫыыыыыыыыыыыыыыыы
                        </p>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage >
    );
};

export default NewsPage;
