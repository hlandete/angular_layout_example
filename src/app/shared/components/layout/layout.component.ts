import { Component, OnInit } from "@angular/core";
import { Article } from "../../interfaces/article";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  articles_a: Array<Article> = [
    {
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repellat ratione a ad commodi aperiam quia similique reprehenderit eligendi explicabo nostrum nisi earum vero, unde, quidem atque enim eaque amet.",
      specialStyle: false,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repellat ratione a ad commodi aperiam quia similique reprehenderit eligendi explicabo nostrum nisi earum vero, unde, quidem atque enim eaque amet.",
      specialStyle: true,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repellat ratione a ad commodi aperiam quia similique reprehenderit eligendi explicabo nostrum nisi earum vero, unde, quidem atque enim eaque amet.",
      specialStyle: false,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
