import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { listaFrases } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  Frases: Frase[] = listaFrases;   //declarado public
  Legenda: string = "Traduza a Frase:"    //observe que por default tudo é considerado como public
  resposta:string = ''
  progresso: number = 0;

  rodada: number = 0
  rodadaFrase: Frase = listaFrases[this.rodada]

  tentativas: number = 3

  @Output() public encerrarJogo = new EventEmitter<string>()

  
  constructor() {  }

  public AtualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public VerificarResposta(): void {

      if(this.resposta == this.rodadaFrase.FrasePtBr) {
          this.AtualizarRodada();
      }else{
        this.tentativas --;
      }

      if (this.tentativas === -1){
          this.encerrarJogo.emit('voce perdeu')
      }

      if (this.rodada === 4){
          this.encerrarJogo.emit('voce ganhou')
      }
  }

  public AtualizarRodada(): void {
    this.rodada++
    this.rodadaFrase = listaFrases[this.rodada]
    this.progresso = this.progresso + (100 / this.Frases.length)
    this.resposta = '';
  }

  ngOnInit() { }

  ngOnDestroy(){ }

}
