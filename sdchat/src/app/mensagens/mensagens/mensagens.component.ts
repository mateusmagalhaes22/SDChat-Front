import { MensagensService } from '../mensagens.service';
import { mensagem } from './../mensagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {

  constructor(private service: MensagensService){}

  mensagens: mensagem[] = [];
  dataSource = this.mensagens;
  displayedColumns: string[] = ['conteudo'];

  ngOnInit(): void {
    this.service.list().subscribe(data => {
      this.mensagens = data
      this.dataSource = this.mensagens
    })
  }


}
