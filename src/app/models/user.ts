import {Trip} from './trip'
import {Profile} from './profile'
export class User{
 full_name:string;
 email:string;
 token:string;
 trips:[Trip];
 saved?:[Trip];
 profiles:[Profile];
}
