function variableTest() {
    if (true) {
        var normalVariable = "TestVariable";
        var newVariable = "test2";
    }
    console.log(normalVariable);
    // console.log(newVariable); Error as it using let variable 
}

let testString ="new Test String";

//testString=34;// throws error 
let testString2:string ="new string with type";
console.log(testString2);

const empData =[{Name:"Test1",Dept:"TestDept"},
                {Name:"Test2",Dept:"TestDept"},
                {Name:"Test3",Dept:"TestDept"}]; 

//empData=[]; // Errors out because it declares as const, but we can change the data 
empData.push({Name:"Test3",Dept:"TestDept"});
console.log(empData);

function getEmployeeDept(Name:string){
    for(let emp of empData){
        if(emp.Name == Name){
            return emp.Dept;
        }
    }
}

//getEmployeeDept(42); //throws error because of type mismatch 
getEmployeeDept("Test3"); //works fine as it matches the type

//Enums
enum Category {Biography, Poetry, Fiction};//0,1,2
enum Category1 {Biography=1, Poetry, Fiction};//1,2,3 
enum Category2 {Biography=5, Poetry=8, Fiction=10};//0,1,2

let favoriteCategory = Category.Biography;
let CategoryString = Category[favoriteCategory];

//Arrays
//Declaration
let strArray1: string[] =["String1", "String2","String3"];
let strArray2: Array<string> = ["String1", "String2","String3"];
let mixArray:Array<any> =["String1",1,true];


//Tuples
let myTuple:[number,boolean] =[1, true,1,2,4];
//let myTuple2:[number,string] =[1,"strong",1,3,4,true]; //Error as Boolean not declared in tuple type

//Functions in TypeScript 
function createEmployeeID(name:string,dept:string, entryNumber:number): string {
    return name+dept+entryNumber;
}

//Arrow functions 
let printEmpName = empData.forEach((emp) => console.log(emp.Name));

//Passing parameters to Arrow function 
let printEmpID = empData.forEach((emp,index) => {
    console.log(emp.Name+index)}
);

//Function Types
let myEmpId: string = createEmployeeID("TestName","25",25);
let EmpIDGenerator:(name: string, dept:string, entryNumber)=>string;  //Type Interface
EmpIDGenerator = createEmployeeID;
let newEmpID = EmpIDGenerator("A0","B2",123);

//Optional and Default parameters 
function createEmployee(empName: string, empPh?:number, empLocation:string = "Bagalore"): void{
    console.log(empName);
}

//Rest parameters
function getEmployeesById(empArray,...empIDs:number[]):string[] {
    let employeeNames =[]; 
    for(let emp in empArray){
        if(empIDs.indexOf(emp["ID"])!=0){
            employeeNames.push(emp["Id"]);
        }
    }
    return employeeNames;
}

let empNameArray = getEmployeesById(empData,1,2,3);

//Overloading 
function getEmployee(empProperty: any):string[]{
    let empArray:string[];
    if(typeof empProperty == 'number'){
        empData.forEach(element => {
            if(element["ID"] ==empProperty){}
                empArray.push(element.Name);
        });
    }
    else if(typeof empProperty =="string"){
         empData.forEach(element => {
            if(element["Dept"] ==empProperty){}
                empArray.push(element.Name);
        });
    }
    return empArray;
}

