"use strict";
var enums_1 = require("./enums");
var classes_1 = require("./classes");
//interfaces
function GetAllEmployees() {
    var empData = [
        { Id: 1, Name: "Emp1", Desg: enums_1.Designation.ASE, Ext: 235 },
        { Id: 2, Name: "Emp2", Desg: enums_1.Designation.SE, Email: "@gmail.com" },
        { Id: 3, Name: "Emp3", Desg: enums_1.Designation.SSE },
        { Id: 4, Name: "Emp4", Desg: enums_1.Designation.PM }
    ];
    return empData;
}
function showEmployee(emp) {
    console.log(emp.Name);
}
var testEmp = {
    Id: 12,
    Name: "Test Employee",
    Desg: enums_1.Designation.TL,
    Email: "@email.com",
    PII: function (name) { return console.log("Employee Name" + name); }
};
//We can all even we didn't explicitly mark testEmp as of type Employee (Even testEmp has extra properties)
showEmployee(testEmp);
var mySearch; //Implement the interface
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
console.log("String search result: " + mySearch("Google", "Albhabet"));
var newEmp = {
    Id: 123,
    Desg: enums_1.Designation.ASE,
    contractMonths: 3,
    Name: "TestCE"
};
//classes
var newCompany = new classes_1.Company("Company1", "Banglore", 123);
//newCompany.email ="a@gmail.com"; //Error as it is a private field 
newCompany.showCompany();
newCompany.code = "asdfg";
console.log(newCompany.RegdId + newCompany.code);
var newBranch = new classes_1.Branch("TestCompnay", "India", 1234, "Banglore");
newBranch.showCompany();
//# sourceMappingURL=TypeScriptAdvanceConcepts.js.map