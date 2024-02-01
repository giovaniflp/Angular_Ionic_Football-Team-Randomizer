import { Component, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-randomize-logic',
  templateUrl: './randomize-logic.component.html',
  standalone: true
})
export class RandomizeLogicComponent{

  constructor(private changeDetectorRef: ChangeDetectorRef) {}


  public nomes: string[] = []
  public resultadoGrupos: string[][] = []

  public addNomesLista(value: string) {
    if(value == "" || value == null || value == undefined || value == " " || value == "  "){
      window.alert("Valor vazio ou inválido!")
    } else{
      this.nomes.push(value)
    }
  }

  public resultado(number: number){
    if(number <= 0 || number == null || number == undefined){
      window.alert("Valor inválido!")
    } else{
      const embaralharNomes = [...this.nomes]

      embaralharNomes.sort(() => Math.random() - 0.5)

      this.resultadoGrupos = []
      for(let i = 0; i <embaralharNomes.length; i+= number){
        let grupo = embaralharNomes.slice(i, i+number)
        this.resultadoGrupos.push(grupo)
      }
    }

  }

  public addAtrasadoTime(value: string) {
    this.resultadoGrupos[this.resultadoGrupos.length - 1].push(value)
    this.changeDetectorRef.detectChanges();
    console.log(this.resultadoGrupos)
  }
}
