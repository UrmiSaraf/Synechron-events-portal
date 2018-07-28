import {Injectable ,Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Post } from "../models/post";

@Injectable()
export class JphService{
    constructor(@Inject(HttpClient) private _http:HttpClient){

    }

    getAllPosts():Observable<Post[]>{
        return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

    }
}