import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../interfaces/article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  @Input() isFirst: boolean = false;
  @Input() article: Article;
  constructor() {}

  ngOnInit() {}
}
