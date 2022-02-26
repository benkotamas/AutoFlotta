import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() cols: any[] = [];

  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  phraseString: any= "";
  phraseKey: string='notset';
  deleteIconClass: string = 'fa fa-trash-o';
  newRow: any = {};

  constructor(
    private baseService: BaseService,
  ) {}

  ngOnInit(): void {
  }

  onCreate(row): void{
    this.create.emit(row);
  }

  onUpdate(row): void {
    this.update.emit(row);
  }

  onDelete(row): void {
    if (confirm("Biztosan törölni akarod?")){
      this.delete.emit(row);
    }
  }

}
