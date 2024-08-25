import{initializeApp}from'firebase/app'
import{getFirestore}from'firebase/firestore'

const firebaseConfig={
    apiKey:'AIzaSyDP3vfx6VFo-wdgd3a_oTgjlfvr0fitFnE',
    authDomain:'mar-33597.firebaseapp.com',
    projectId:'mar-33597',
    storageBucket:'mar-33597.appspot.com',
    messagingSenderId:'1057985988628',
    appId:'1:1057985988628:web:49ba83692d1a00e7543f01'
}

const app=initializeApp(firebaseConfig)

export const db=getFirestore(app)