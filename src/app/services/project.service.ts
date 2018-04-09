import { Project } from '../models/project';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProjectService {

    constructor(private firestore: AngularFirestore) { }

    get(id: string) {
        return this.firestore.collection<Project>('projects').doc(id);
    }

    create(project: Project) {
        return this.firestore.collection<Project>('projects').add(project);
    }

    update(project: Project) {
        return this.firestore.collection<Project>('projects').doc(project.id).set(project, { merge: true });
    }
}