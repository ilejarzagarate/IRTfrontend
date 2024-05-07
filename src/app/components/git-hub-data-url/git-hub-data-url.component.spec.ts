import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubDataUrlComponent } from './git-hub-data-url.component';

describe('GitHubDataUrlComponent', () => {
  let component: GitHubDataUrlComponent;
  let fixture: ComponentFixture<GitHubDataUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubDataUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitHubDataUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
