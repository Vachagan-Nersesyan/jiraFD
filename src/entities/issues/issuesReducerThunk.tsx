import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase"
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { IssuesType } from "./issuesReducerTs.interface"

export const fetchIssues = createAsyncThunk(
    'project/fetchIssues',
    async () => {

        const querySnapshot = await getDocs(collection(db, 'project'))

        return querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
    }
)



export const addIssueFilterNameFunc = createAsyncThunk(
    'project/addIssueFilterNameFunc',
    async (item: { str: string }) => {

        let collectionRef = await getDocs(collection(db, 'issues'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'issues', 'ecEde7J6Mi59lB9Ksev7');


        let projectArrCLone = { ...data[0] }

        projectArrCLone.filterIssueName = item


        await updateDoc(docRef, {
            projectArr: projectArrCLone,
        });

        return { ...item }


    }
)



export const changeActualFilterdIssuesArrFunc = createAsyncThunk(
    'project/changeActualFilterdIssuesArrFunc',
    async (item: Array<IssuesType>) => {

        let collectionRef = await getDocs(collection(db, 'issues'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'issues', 'ecEde7J6Mi59lB9Ksev7');


        let projectArrCLone = { ...data[0] }
        projectArrCLone.filteredIssuesInitArr = item


        await updateDoc(docRef, {
            projectArr: projectArrCLone,
        });

        return { ...item }


    }
)



export const changeActualFilterdCloneIssueArrFunc = createAsyncThunk(
    'project/changeActualFilterdCloneIssueArrFunc',
    async (item: Array<IssuesType>) => {

        let collectionRef = await getDocs(collection(db, 'issues'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'issues', 'ecEde7J6Mi59lB9Ksev7');


        let projectArrCLone = { ...data[0] }

        projectArrCLone.filteredIssuesArr = item



        await updateDoc(docRef, {
            projectArr: projectArrCLone,
        });

        return { ...item }


    }
)


