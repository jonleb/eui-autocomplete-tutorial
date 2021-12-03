import { Injectable, Inject } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'


import { CONFIG_TOKEN, handleError } from '@eui/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Tag } from './tag.model'

@Injectable({
    providedIn: 'root'
})
export class TagService {

    private _url;

    constructor( 
        @Inject(CONFIG_TOKEN) protected config: any,
        private _httpClient: HttpClient 
    ){
        this._url = `${config.modules.tags}`;
    }

    getTags():Observable<Array<Tag>>{
        return this._httpClient.get<Tag[]>(this._url).pipe(catchError(handleError))
    }

}
