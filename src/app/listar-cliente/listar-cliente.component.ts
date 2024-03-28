import { Component } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent {

  public clientes: Cliente[] = [];
  _clienteService: any;
  constructor(private_clienteService: ClienteService, private _router: Router) { }
  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this._clienteService.getClientes().subscribe((retornaCliente: any[]): void =>
       {this.clientes = retornaCliente.map(item => {
          return new Cliente(
            item.id,
            item.nome,
            item.endereco
          );
        }
      )
    }
    )
  }
}
