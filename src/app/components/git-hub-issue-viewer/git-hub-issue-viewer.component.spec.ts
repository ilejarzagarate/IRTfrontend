import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubIssueViewerComponent } from './git-hub-issue-viewer.component';

describe('GitHubIssueViewerComponent', () => {
  let component: GitHubIssueViewerComponent;
  let fixture: ComponentFixture<GitHubIssueViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubIssueViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitHubIssueViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
