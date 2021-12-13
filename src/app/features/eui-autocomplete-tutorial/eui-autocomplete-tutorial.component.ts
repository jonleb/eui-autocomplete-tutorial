import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';
import { Tag } from './tag.model'

@Component({
    templateUrl: './eui-autocomplete-tutorial.component.html'
})
export class EuiAutocompleteTutorialComponent implements OnInit {
    
    tagList: Tag[] = [];
    _tagService: TagService;

    constructor(tagService: TagService){
        this._tagService = tagService
    }

    ngOnInit(){
        console.log("init");
        this._tagService.getTags().subscribe( tags => {
            this.tagList = tags;
            console.log(tags);
        });

    }

}
