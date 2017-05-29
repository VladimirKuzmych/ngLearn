import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './reddit-article.model';

@Component({
  moduleId: module.id,
  selector: 'app-reddit-article',
  templateUrl: './reddit-article.component.html',
  styleUrls: ['./reddit-article.component.css']
})
export class RedditArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() public article: Article;

  constructor() {
  }

  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {}

}

