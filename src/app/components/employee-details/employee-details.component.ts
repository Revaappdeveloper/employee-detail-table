import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  inputBox: boolean = false;
  empID: string = '';
  empName: string = '';
  empDesignation: string = '';
  btnText: string = '';
  keepIndex = null;


  empDetails: any;



  constructor() {


    this.empDetails = [{
      id: "Emp01",
      name: " ABC",
      designation: "S/W Eng"
    },
    {
      id: "Emp02",
      name: " BCD",
      designation: "S/W Eng"
    },
    {
      id: "Emp03",
      name: " DEF",
      designation: "S/W Eng"
    },
    {
      id: "Emp04",
      name: " EFG",
      designation: "S/W Eng"
    }]

  }

  ngOnInit() {
  }
  addRow() {
    console.log('Add');
    this.inputBox = true;
    this.btnText = "ADD";
  }

  saveData() {
    let empData = {
      id: this.empID,
      name: this.empName,
      designation: this.empDesignation
    };
    if (this.keepIndex !== null) {
      this.empDetails[this.keepIndex] = empData;
    }
    else {
      this.empDetails.push(empData);
    }
    this.inputBox = false;
    this.empID = null;
    this.empName = null;
    this.empDesignation = null;
    this.keepIndex = null;
  }
  editRow(index) {
    this.keepIndex = index;
    console.log('Edit');
    this.btnText = "SAVE";
    this.inputBox = true;
    let obj = this.empDetails[index];
    console.log(obj);
    this.empID = obj.id;
    this.empName = obj.name;
    this.empDesignation = obj.designation;
  }
  deleteRow(index) {
    console.log('Delete');
    this.empDetails.splice(index, 1);

  }

}
