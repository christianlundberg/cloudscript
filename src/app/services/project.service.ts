import { Project } from '../models/project';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable()
export class ProjectService {

    constructor(private firestore: AngularFirestore) { }

    get(id: string) {
        return this.firestore.collection<Project>('projects').doc(id)
            .snapshotChanges()
            .pipe(
                map(snapshot => ({...snapshot.payload.data(), id: snapshot.payload.id}))
            );
    }

    getAll(userId: string){
        return this.firestore.collection<Project>('projects', ref => ref.where('userId', '==', userId))
            .snapshotChanges()
            .pipe(
                map(snapshot => snapshot.map(doc => ({...doc.payload.doc.data(), id: doc.payload.doc.id})))
            );
    }

    create(project: Project) {
        return this.firestore.collection<Project>('projects').add({...project, date: firebase.firestore.FieldValue.serverTimestamp()});
    }

    update(project: Project) {
        return this.firestore.collection<Project>('projects').doc(project.id).set(project, { merge: true });
    }
}