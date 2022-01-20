import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detectors',
  templateUrl: './detectors.component.html',
  styleUrls: ['./detectors.component.css']
})
export class DetectorsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

}
