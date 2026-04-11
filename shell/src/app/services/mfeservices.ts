import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MFEServices {

  async loadRemoteApplication(port:number, remoteName:string){
    try{
      return await loadRemoteModule({
        exposedModule: `./Component`,
        remoteName: remoteName,
        remoteEntry: `http://localhost:${port}/remoteEntry.js`,
        fallback: "unauthorized"
      })
    }
    catch(err){
      console.log(err)
    }
  }

}
