import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public isAddTimerVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];
  public isEndTimerAlertVisible = false;

  constructor() {
    this.timers = [2, 3, 185];
    console.log(this.timers);
  }

  logCountDownEnd() {
    console.log("the countdown has finished");
    this.showEndTimerAlert();
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
  }
  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }
  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
  showEndTimerAlert() {
    this.isEndTimerAlertVisible = true;
  }
  hideEndTimerAlert() {
    this.isEndTimerAlertVisible = false;
  }
}
