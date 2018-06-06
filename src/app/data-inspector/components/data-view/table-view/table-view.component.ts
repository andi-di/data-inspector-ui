import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { TopicData } from "../../../models/data.interface";

@Component({
  selector: "diu-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.css"]
})
export class TableViewComponent implements OnInit, OnChanges {
  @Input() data: Array<TopicData>;
  @Output() dataSelected: EventEmitter<any> = new EventEmitter();

  displayedColumns: Array<string>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const tableData: Array<any> = [];
    this.data.forEach((topicData: TopicData) => {
      tableData.push(topicData.data);
    });
    if (tableData[0]) {
      this.displayedColumns = [];
      Object.keys(tableData[0]).forEach(key => {
        if (typeof tableData[0][key] !== 'object') {
          this.displayedColumns.push(key);
        }
      });
      // this.displayedColumns.push('actions');
    }
    this.dataSource.data = tableData;
  }

  selectData(data: any) {
    this.dataSelected.emit(data);
  }


}
