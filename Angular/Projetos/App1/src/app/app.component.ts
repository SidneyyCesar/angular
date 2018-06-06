import { Component } from '@angular/core';
import { UnhandledAlertError } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    jogoEmAndamento: boolean = true
    resultadoJogo: string

    public encerrarJogo(msg: string): void {
        this.jogoEmAndamento = false
        this.resultadoJogo = msg
    }

    public reiniciarJogo(): void {
        this.jogoEmAndamento = true
        this.resultadoJogo = undefined
    }
}