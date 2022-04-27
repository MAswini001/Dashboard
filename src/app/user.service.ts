import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { logindata, tokendata, userdata } from 'src/model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
createUser(userdata:userdata):Observable<userdata>{
 return this.http.post<userdata>('https://6264ec9c94374a2c506b3a79.mockapi.io/userdata',userdata);
}

userdata():Observable<Array<userdata>>{
   return this.http.get<Array<userdata>>('https://6264ec9c94374a2c506b3a79.mockapi.io/userdata')
}

userbyid(id:String):Observable<userdata>{
  return this.http.get<userdata>(`https://6264ec9c94374a2c506b3a79.mockapi.io/userdata/${id}`)
}
updateuserid(id:String,userdata:userdata):Observable<userdata>{
  return this.http.put<userdata>(`https://6264ec9c94374a2c506b3a79.mockapi.io/userdata/${id}`,userdata)
}

deleteuserbyid(id:String):Observable<userdata>{
  return this.http.delete<userdata>(`https://6264ec9c94374a2c506b3a79.mockapi.io/userdata/${id}`)
}
login(data:logindata):Observable<tokendata>{
    return this.http.post<tokendata>("http://localhost:8000/login",data)
}

} 