import { TestBed } from '@angular/core/testing';

import { CaptacaoService } from './captacao.service';

describe('CaptacaoService', () => {
  let service: CaptacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
