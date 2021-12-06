import { Component, OnInit } from '@angular/core';

import { EuiAutoCompleteItem } from '@eui/components/eui-autocomplete';
    
import { TagService } from './tag.service';
import { Tag } from './tag.model';

@Component({
    templateUrl: './eui-autocomplete-tutorial.component.html'
})
export class EuiAutocompleteTutorialComponent implements OnInit {

    tagList: Tag[] = [];
    _tagService: TagService;
    autocomplete_tags: EuiAutoCompleteItem[] = [];
    constructor(tagService: TagService) {
        this._tagService = tagService;
    }

    ngOnInit() {
        this.autocomplete_tags.push(new EuiAutoCompleteItem({ id: 1000, label: 'Fake tag' }));
        this._tagService.getTags().subscribe( tags => {
            this.tagList = tags;
            tags.forEach(tag => {
                this.autocomplete_tags.push(new EuiAutoCompleteItem({ id: tag.id, label: tag.name }));
            });
        });
    }

}
