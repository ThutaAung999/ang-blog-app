import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable,map} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private afs:AngularFirestore) { }

  //Angular 14
  loadFeatured():Observable<Post[]>{
    return this.afs.collection('posts',ref=>ref.where("isFeatured",'==', true).limit(4)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{

          const post=a.payload.doc.data()  as Post
          const id=a.payload.doc.id;
          post.id = id;

          return  post

          /*
          const post=a.payload.doc.data()
          const id=a.payload.doc.id;
          return {id,post} as Post
           */
        })
      })
    )
  }


  loadLatest():Observable<Post[]>{

    return this.afs.collection('posts',ref=>ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{

          const post=a.payload.doc.data()  as Post
          const id=a.payload.doc.id;
          post.id = id;

          return  post
        })
      })
    )
  }

}

