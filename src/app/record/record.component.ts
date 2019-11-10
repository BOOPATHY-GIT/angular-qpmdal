import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  records:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getRecords();
  }

  public getRecords() {
    this.records = [];
    this.rest.getAllRecords().subscribe((data) => {
      if (data) {
        console.log ('got records: ' + JSON.stringify(data));
        this.records = data;
      }
    });
  }

  public addRecord () {
    this.router.navigate(['/record-add']);
  }

  public deleteRecord (id: string) {
    this.rest.deleteARecord(id).subscribe((res) => {
      this.getRecords();
    }, err => {
      console.log(err);
    }
    )
  }

}
