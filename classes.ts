
class Company{
     Name:string;
     Location: string;
     RegdId: number;
     private email:string;
     private _code:string;

     get code():string{
        return this._code.toUpperCase();
     }
     set code(codeValue:string){
        this._code=codeValue;
     }
    constructor(Name:string, Location: string, RegdId: number ){
        this.Name=Name;
        this.RegdId=RegdId;
    }
    showCompany():void{
        console.log("Company name is " + this.Name);
    }
}

class Branch extends Company{
    branchLocation:string;
    constructor(CompanyName,CompanyLocation,regID,location:string){
        super(CompanyName,CompanyLocation,regID);
        this.branchLocation=location;
    }
}



export{Company,Branch};