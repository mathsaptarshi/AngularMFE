npm i @angular-architects/native-federation 
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
ng g @angular-architects/native-federation:init --project movie-list --port 4200 --type remote

ng g @angular-architects/native-federation:init --project ticket-availability --port 4202 --type remote


npm install bootstrap


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


  @ViewChild('movieList',{read: ViewContainerRef,static:true}) listContainer!: ViewContainerRef;
  private listContainerRef: ComponentRef<any>|null = null;


try{
      const listModule = await this._mfeService.loadRemoteApplication(4201,'movie-list');
      this.listContainer.clear();
      this.listContainerRef = this.listContainer.createComponent(listModule.App);
      this.listContainerRef.changeDetectorRef.detectChanges();
    }
    catch(err){

    }