import {Designation} from './enums'

interface Employee{
    Id:number;
    Name: string;
    Desg: Designation;
    Ext?: number;
    PII?: PersonalInformation;
}

interface PersonalInformation{
    (name: string):void
}

export {Employee, PersonalInformation}