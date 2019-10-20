import { SimpleAlertViewComponent } from "./simple-alert-view/simple-alert-view.component";
import {
  Component,
  ViewChild,
  AfterViewInit,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterContentInit {
  public isAddTimerVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];
  public isEndTimerAlertVisible = false;

  @ViewChild(SimpleAlertViewComponent) alert: SimpleAlertViewComponent;

  constructor() {
    this.timers = [2, 3, 185];
    console.log(this.timers);
  }
  ngAfterContentInit() {
    console.log(this.alert);
    this.alert.show();
    this.alert.title = "hi";
    this.alert.message = "hi";
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
