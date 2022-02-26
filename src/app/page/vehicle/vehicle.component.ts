import { Component } from '@angular/core';
import { Base } from '../base';
import { BaseService } from '../../service/base.service';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends Base {

  constructor(
    baseService: BaseService,
    config: ConfigService,
  ) {
    super(baseService, config, 'vehicles');
  }
}
