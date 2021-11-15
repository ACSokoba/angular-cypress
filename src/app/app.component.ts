import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  total: number;
  showCounter: boolean = true;
  constructor() {
    // dependencies injection
  }
  ngOnInit() {
    this.total = 0;
    this.showCounter = true;
  }
  public increment() {
    this.total++;
  }

  public changeCounterDisplay() {
    this.showCounter = !this.showCounter;
  }
}
