import {Designation} from './enums'

interface Employee{
    Id:number;
    Name: string;
    Desg: Designation;
    Ext?: number;
}
export {Employee}