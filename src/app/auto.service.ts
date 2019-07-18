import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class AutoService implements AutoCompleteService {
  labelAttribute = "name";
  baseUrl: string = 'http://ec2-35-180-205-235.eu-west-3.compute.amazonaws.com/api';
  constructor(private http:Http) {

  }
  getResults(keyword:string) {
    return this.http.get(this.baseUrl + '/cities').toPromise().then((res: any) => {
        res.map(
            result =>
            {
              return result.json()
                .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
            });
    }).catch(); 
      
  }
}