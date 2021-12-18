import { Storage } from '@capacitor/storage';
import UserData from './interfaces';

async function getUserInfo(){
    const { value } = await Storage.get({ key: 'user' });
    return value ? JSON.parse(value) : "Не удалось получить данные о вас";
}

async function updateUserInfo(userInfo: UserData) {
    const _ = await Storage.set({
        key: 'UserData',
        value: JSON.stringify(userInfo),
      });
    return Boolean(_) ? 1 : "Не удалось обновить информацию";
}

async function setApiKey(key: string) {
    const _ = await Storage.set({
        key: 'ApiKey',
        value: key,
      });
    return Boolean(_) ? 1 : "Не удалось сохранить ключ";
}

async function getApiKey() {
    const { value } = await Storage.get({ key: 'ApiKey' });
    return value ? value : false;
}

export { getUserInfo, updateUserInfo, setApiKey, getApiKey };