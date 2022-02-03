import { Component } from "@angular/core";
import { Routes } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  links_a: Array<string> = ["Link1", "Link2", "Link3", "Link4"];
  socialMedia_a: Array<string> = ["FB", "TW", "G+"];
}
