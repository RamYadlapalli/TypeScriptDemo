import {Designation} from "./enums"
import {Employee} from "./interfaces"

//interfaces
function GetAllEmployees():Employee[]{
    let empData=[
  {Id:1,Name:"Emp1",Desg:Designation.ASE,Ext:235}
  {Id:2,Name:"Emp2",Desg:Designation.SE,Email:"@gmail.com"},
  {Id:3,Name:"Emp3",Desg:Designation.SSE},
  {Id:4,Name:"Emp4",Desg:Designation.PM}
    ];
    return empData;
}

function showEmployee(emp:Employee):void{
    console.log(emp.Name);
}
let testEmp ={
    Id:12,
    Name: "Test Employee",
    Desg:Designation.TL,
    Email:"@email.com"
}

//We can all even we didn't explicitly mark testEmp as of type Employee (Even testEmp has extra properties)
showEmployee(testEmp);