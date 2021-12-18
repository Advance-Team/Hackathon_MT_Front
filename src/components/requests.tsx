import { getApiKey, setApiKey, updateUserInfo } from "./storage";
var host = "localhost/api/"

async function logReg() {
    
    fetch(host + "Login").then((val) => {
        val.text().then(
            (val) => {
                if (val == "1") {
                    return 1;
                } else {
                    return 0;
                }
            }
        )
    }).catch((e) => {
        console.error(e);
    })
}

async function getDoc() {

}

async function getRaiting() {

}

async function getUserInfo() {

}

async function getProfile() {

}

async function updateInfo() {

}


export { logReg, getDoc, getRaiting, getUserInfo, getProfile, updateInfo };