import { Component, OnInit } from '@angular/core';
import { initJsStore } from './service/idb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JsStore Angular';

  async ngOnInit() {
    try {
      await initJsStore();
      console.log('jsstore connected');
    } catch (error) {
      alert(error.message);
    }
  }
}
