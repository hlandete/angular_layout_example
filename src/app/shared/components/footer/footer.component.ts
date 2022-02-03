import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @Input() links_a: Array<string>;
  @Input() socialMedia_a: Array<string>;
  constructor() {}

  ngOnInit() {}
}
