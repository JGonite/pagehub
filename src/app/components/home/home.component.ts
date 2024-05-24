import { Component } from '@angular/core';
import { PghubFormComponent } from '../pghub-form/pghub-form.component';
import { PghubApresentacaoComponent } from '../pghub-apresentacao/pghub-apresentacao.component';
import { PghubNavbarComponent } from '../pghub-navbar/pghub-navbar.component';

@Component({
  selector: 'app-home', // tag html utilizada para chamar o componenete
  standalone: true, // interessante: quando você configurava os seus componentes você precisava configurar os módulos (um arquivo que declara tudo o que o
                    // módulo importa e exporta). Declarations, Imports, Providers... Resolvíamos isso criando um app.module (
                    // significa que esse componenete não precisa ser definido no app.module
  imports: [
    PghubApresentacaoComponent,
    PghubFormComponent,
    PghubNavbarComponent
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
