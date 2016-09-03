import {Component} from '@angular/core';
import {APP_SHELL_DIRECTIVES} from '@angular/app-shell';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {APP_MENU} from '../app/app-menu/app-menu.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_SIDENAV_DIRECTIVES]
})
export class AppComponent {
  title:string = 'app works!';
  description:string = 'This is going to be a perfect platform'
}
