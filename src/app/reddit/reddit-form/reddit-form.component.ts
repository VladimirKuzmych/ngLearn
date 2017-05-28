import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-form',
  templateUrl: './reddit-form.component.html',
  styleUrls: ['./reddit-form.component.css']
})
export class RedditFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
