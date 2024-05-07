import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitHubDataUrlComponent } from "./components/git-hub-data-url/git-hub-data-url.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, GitHubDataUrlComponent]
})
export class AppComponent {
  title = 'Irontec friend';
}
