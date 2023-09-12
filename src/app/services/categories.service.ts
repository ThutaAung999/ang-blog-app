import { Injectable } from '@angular/core';

//Angular 14
import {AngularFirestore,AngularFirestoreCollection} from "@angular/fire/compat/firestore";

//Angular 15
import {Firestore,collection,addDoc,doc,collectionData} from "@angular/fire/firestore";

//import {ToastrService} from "ngx-toastr";

import {map, Observable} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs:AngularFirestore) { }


  loadData():Observable<Category[]>{
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          //const category=a.payload.doc.data() as Category; အဆင်မပြေဘူး

          //const category=a.payload.doc.data() as Category;

          const category=a.payload.doc.data()  as Category

          const id=a.payload.doc.id;
          category.id = id;

          //return  {id,category} //as Category;

          return  category
        })
      })
    )
  }

}
