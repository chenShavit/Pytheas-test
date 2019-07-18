import {Place} from './place';
import {Hotel} from './hotel';
import {Flight} from './flight';  

export class Trip {
destination:string;
start_date:string;
end_date:string;
price:number; 
picture?:string;
pepole_number:number;
places:[Place];
days?:number;
hotel:[Hotel];
flights?:[Flight];
}
