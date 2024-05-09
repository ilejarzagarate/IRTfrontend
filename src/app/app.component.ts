import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail/issue-detail.component';
import { IssueListComponent } from './issues/issue-list/issue-list/issue-list.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, IssueDetailComponent,IssueListComponent, NavBarComponent, FooterComponent]
})
export class AppComponent {
}
