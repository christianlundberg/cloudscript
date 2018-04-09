import { Project } from '../models/project';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProjectService{

    constructor(private firestore: AngularFirestore){}

    create(project: Project){
        return this.firestore.collection('projects').add(project)
    }
}