import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/core/services/partner.service';
import { Partner } from 'src/app/core/model/partner';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners = new Observable<Partner[]>();
  
  constructor(private partnerService: PartnerService) { }

  load_partners(): void {
    this.partners = this.partnerService.getPartners()
  }

  ngOnInit() {
    this.load_partners()
  }

}
