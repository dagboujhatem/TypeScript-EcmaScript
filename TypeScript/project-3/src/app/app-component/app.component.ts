import { Component } from "../../decorators/component";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent extends HTMLElement{
    // constructor(private authService: AuthService){}
}