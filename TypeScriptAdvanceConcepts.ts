import {Designation} from "./enums"
import {Employee,PersonalInformation} from "./interfaces"
import {Company,Branch} from "./classes"

//interfaces
function GetAllEmployees():Employee[]{
    let empData=[
  {Id:1,Name:"Emp1",Desg:Designation.ASE,Ext:235},
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
    Email:"@email.com",
    PII:(name: string)=>console.log("Employee Name" + name)
}

//We can all even we didn't explicitly mark testEmp as of type Employee (Even testEmp has extra properties)
showEmployee(testEmp);

//Interfaces for function types 
interface stringSearch{
    (source:string, substring: string):boolean
}

let mySearch: stringSearch; //Implement the interface
mySearch = function (source: string, substring: string){
    let result = source.search(substring);
    return result > -1;
}
console.log("String search result: "+mySearch("Google","Albhabet"));

//Extending Interfaces
interface contractEmployee extends Employee{
    contractMonths: number
}

let newEmp: contractEmployee = {
    Id:123,
    Desg:Designation.ASE,
    contractMonths:3,
    Name: "TestCE"
}

//classes
let newCompany = new Company("Company1","Banglore",123);
//newCompany.email ="a@gmail.com"; //Error as it is a private field 
newCompany.showCompany();
newCompany.code="asdfg";
console.log(newCompany.RegdId+ newCompany.code);

let newBranch= new Branch("TestCompnay","India",1234,"Banglore");
newBranch.showCompany();