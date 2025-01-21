import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from "./components/prueba/prueba.component";
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { PieComponent } from "./components/pie/pie";
import { EnvoltorioComponent } from "./components/envoltorio/envoltorio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent, CabeceraComponent, PieComponent, EnvoltorioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola_Mundo';
}
