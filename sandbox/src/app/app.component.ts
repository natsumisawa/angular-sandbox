import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox';

  constructor() {
    console.log('コンストラクター');
    this.title = 'コンストラクター';
    console.log('これができたら描画される');
  }

  async ngOnInit() {
    // 2秒待ってみる
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(2000);

    console.log('ngOnInit');
    // 2秒後にタイトルが変わる
    this.title = 'ngOnInit';

    // constructor() -> 初期描画 -> ngOnInit() 値変わる
  }
}
