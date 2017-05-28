import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-reddit-article',
  templateUrl: './reddit-article.component.html',
  styleUrls: ['./reddit-article.component.css']
})
export class RedditArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }
  voteUp() {
    this.votes += 1;
    return false;
  }
  voteDown() {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
