import { SimpleAlertViewComponent } from "./simple-alert-view/simple-alert-view.component";
import {
  Component,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef
} from "@angular/core";
import { isNgTemplate } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  public isAddTimerVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];

  @ViewChildren(SimpleAlertViewComponent) alerts: QueryList<
    SimpleAlertViewComponent
  >;

  constructor(private cdRef: ChangeDetectorRef) {
    this.timers = [2, 3, 185];
    console.log(this.timers);
  }
  ngAfterViewInit() {
    this.alerts.forEach(item => {
      if (!item.title) {
        item.title = "Hi!";
        item.message = "Hello world";
      }
      item.show();
    });
    this.cdRef.detectChanges();
  }

  ngAfterContentInit() {}
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
    this.alerts.first.show();
  }
}
