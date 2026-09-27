import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Usamos los nombres cortos que generó tu Angular
import { Header } from './components/header/header';
import { Inicio } from './components/inicio/inicio';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  // Los agregamos aquí también con los nombres cortos
  imports: [RouterOutlet, Header, Inicio, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ClinicaUnionLaOctava';
}