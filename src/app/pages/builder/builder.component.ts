import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { LayoutService } from "../../_metronic/core/";
import KTLayoutExamples from "../../../assets/js/layout/extended/examples";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"],
})
export class BuilderComponent implements OnInit {
  Creatematchform;

  constructor(
    private layout: LayoutService,
    private el: ElementRef,
    private fb: FormBuilder
  ) {
    this.Creatematchform = this.fb.group({
      matchcode: ["", [Validators.required]],
      matchname: ["", [Validators.required]],
      matchdate: ["", [Validators.required]],
      matchtime: ["", [Validators.required]],
      team1: ["", [Validators.required]],
      team2: ["", [Validators.required]],
      team3: ["", [Validators.required]],
      team4: ["", [Validators.required]],
      team5: ["", [Validators.required]],
      team6: ["", [Validators.required]],
      team7: ["", [Validators.required]],
      team8: ["", [Validators.required]],
      team9: ["", [Validators.required]],
      team10: ["", [Validators.required]],
      team11: ["", [Validators.required]],
      team12: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {}
}
