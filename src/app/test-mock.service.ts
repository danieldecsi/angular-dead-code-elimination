import { Injectable } from '@angular/core';

alert('Yey');

@Injectable({
  providedIn: 'root'
})
export class TestMockService {

  constructor() {
    console.log('testMock');
  }
}
