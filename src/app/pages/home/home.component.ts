import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,AfterViewInit {
  title = 'EcoShop';
  products: any;
  menus: any;

  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    // this.loadScripts();
  }

  ngAfterViewInit() {
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/theme-script.js').onload = () => {};
    this.renderExternalScript('assets/js/shoppingCart.js').onload = () => {};
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
