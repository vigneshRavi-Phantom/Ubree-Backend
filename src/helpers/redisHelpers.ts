import {client} from '../dbconfig';
import { convertToString } from './parsing';

const setValue = async(key:string,value:any)=>{
    const stringifiedValue = convertToString(value);
    await (client as any).setAsync(key, stringifiedValue);
}
const getValue = async(key:string)=>{
const value = (client as any).getAsync(key);
return  value;
}

