function variableTest() {
    if (true) {
        var normalVariable = "TestVariable";
        var newVariable = "test2";
    }
    console.log(normalVariable);
    // console.log(newVariable); Error as it using let variable 
}
var testString = "new Test String";
//testString=34;// throws error 
var testString2 = "new string with type";
console.log(testString2);
var empData = [{ Name: "Test1", Dept: "TestDept" },
    { Name: "Test2", Dept: "TestDept" },
    { Name: "Test3", Dept: "TestDept" }];
//empData=[]; // Errors out because it declares as const, but we can change the data 
empData.push({ Name: "Test3", Dept: "TestDept" });
console.log(empData);
function getEmployeeDept(Name) {
    for (var _i = 0, empData_1 = empData; _i < empData_1.length; _i++) {
        var emp = empData_1[_i];
        if (emp.Name == Name) {
            return emp.Dept;
        }
    }
}
//getEmployeeDept(42); //throws error because of type mismatch 
getEmployeeDept("Test3"); //works fine as it matches the type
//Enums
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
})(Category || (Category = {}));
; //0,1,2
var Category1;
(function (Category1) {
    Category1[Category1["Biography"] = 1] = "Biography";
    Category1[Category1["Poetry"] = 2] = "Poetry";
    Category1[Category1["Fiction"] = 3] = "Fiction";
})(Category1 || (Category1 = {}));
; //1,2,3 
var Category2;
(function (Category2) {
    Category2[Category2["Biography"] = 5] = "Biography";
    Category2[Category2["Poetry"] = 8] = "Poetry";
    Category2[Category2["Fiction"] = 10] = "Fiction";
})(Category2 || (Category2 = {}));
; //0,1,2
var favoriteCategory = Category.Biography;
var CategoryString = Category[favoriteCategory];
//Arrays
//Declaration
var strArray1 = ["String1", "String2", "String3"];
var strArray2 = ["String1", "String2", "String3"];
var mixArray = ["String1", 1, true];
//Tuples
var myTuple = [1, true, 1, 2, 4];
//let myTuple2:[number,string] =[1,"strong",1,3,4,true]; //Error as Boolean not declared in tuple type
//Functions in TypeScript 
function createEmployeeID(name, dept, entryNumber) {
    return name + dept + entryNumber;
}
//Arrow functions 
var printEmpName = empData.forEach(function (emp) { return console.log(emp.Name); });
//Passing parameters to Arrow function 
var printEmpID = empData.forEach(function (emp, index) {
    console.log(emp.Name + index);
});
//Function Types
var myEmpId = createEmployeeID("TestName", "25", 25);
var EmpIDGenerator; //Type Interface
EmpIDGenerator = createEmployeeID;
var newEmpID = EmpIDGenerator("A0", "B2", 123);
//Optional and Default parameters 
function createEmployee(empName, empPh, empLocation) {
    if (empLocation === void 0) { empLocation = "Bagalore"; }
    console.log(empName);
}
//Rest parameters
function getEmployeesById(empArray) {
    var empIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        empIDs[_i - 1] = arguments[_i];
    }
    var employeeNames = [];
    for (var emp in empArray) {
        if (empIDs.indexOf(emp["ID"]) != 0) {
            employeeNames.push(emp["Id"]);
        }
    }
    return employeeNames;
}
var empNameArray = getEmployeesById(empData, 1, 2, 3);
//Overloading 
function getEmployee(empProperty) {
    var empArray;
    if (typeof empProperty == 'number') {
        empData.forEach(function (element) {
            if (element["ID"] == empProperty) { }
            empArray.push(element.Name);
        });
    }
    else if (typeof empProperty == "string") {
        empData.forEach(function (element) {
            if (element["Dept"] == empProperty) { }
            empArray.push(element.Name);
        });
    }
    return empArray;
}
//# sourceMappingURL=TypeScriptConcepts.js.map