import { Component, OnInit } from '@angular/core';
import { ThingService } from '../../services/thing.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent implements OnInit {

  constructor(public thingService: ThingService) { }

  ngOnInit() {
  }

  removeThing(key, name) {
    const removePromises = this.thingService.removeThing(key);

    removePromises
      .then(res => M.toast({ html: `${name} has successfully removed!` }))
      .catch(err => M.toast({ html: `There was an error trying to remove ${name}!` }));
  }

}
