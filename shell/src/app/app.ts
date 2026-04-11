import { Component, ComponentRef, OnDestroy, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { MFEServices } from './services/mfeservices';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy{
  protected readonly title = signal('shell');
  
  @ViewChild('movieList',{read: ViewContainerRef,static:true}) listContainer!: ViewContainerRef;
  private listContainerRef: ComponentRef<any>|null = null;

  constructor(private _mfeService:MFEServices){

  }

  async ngOnInit(): Promise<void> {
    try{
      const listModule = await this._mfeService.loadRemoteApplication(4201,'movie-list');
      this.listContainer.clear();
      this.listContainerRef = this.listContainer.createComponent(listModule.App);
      this.listContainerRef.changeDetectorRef.detectChanges();
    }
    catch(err){

    }
  }

  ngOnDestroy(): void {
    
  }

}
