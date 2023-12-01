import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase"
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"


enum UserResponse {
    location = 'Your location',
    manager = 'IT Support Manager',
    department = 'Your department',
    organization = 'Your organization'
}

export const fetchUser = createAsyncThunk(
    'project/fetchUser',
    async () => {

        const querySnapshot = await getDocs(collection(db, 'user'))

        return querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
    }
)



export const changeUserInfo = createAsyncThunk(
    'user/changeUserInfo',
    async (item: { infoName: string, str: string }) => {



        let collectionRef = await getDocs(collection(db, 'user'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'user', 'AA0700dD4VOL6asgA7xL');


        let projectArrCLone = { ...data[0] }

        switch (item.str) {

            case UserResponse.location: {
                projectArrCLone.info.location = item.infoName
                break
            }

            case UserResponse.manager: {
                projectArrCLone.info.itSupportManager = item.infoName
                break
            }

            case UserResponse.department: {
                projectArrCLone.info.department = item.infoName
                break
            }

            case UserResponse.organization: {
                projectArrCLone.info.organization = item.infoName
                break
            }


            default: break
        }



        await updateDoc(docRef, {
            info: projectArrCLone.info,
        });

        return { ...item }


    }
)


export const changeUserOtherInfoFBFunc = createAsyncThunk(
    'user/changeUserOtherInfoFBFunc',
    async (item: { name: string | undefined | null, picture: string | undefined | null, email: string | undefined | null }) => {



        let collectionRef = await getDocs(collection(db, 'user'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'user', 'AA0700dD4VOL6asgA7xL');


        let projectArrCLone = { ...data[0] }


        projectArrCLone.info.picture = item.picture
        projectArrCLone.info.name = item.name
        projectArrCLone.info.email = item.email

        await updateDoc(docRef, {
            info: projectArrCLone.info,
        });

        return { ...item }


    }
)



