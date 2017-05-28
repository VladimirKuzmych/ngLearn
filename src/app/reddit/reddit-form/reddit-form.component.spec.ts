import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditFormComponent } from './reddit-form.component';

describe('RedditFormComponent', () => {
  let component: RedditFormComponent;
  let fixture: ComponentFixture<RedditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
