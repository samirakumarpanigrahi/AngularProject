import { AdminFlightPipe } from './admin-flight.pipe';

describe('AdminFlightPipe', () => {
  it('create an instance', () => {
    const pipe = new AdminFlightPipe();
    expect(pipe).toBeTruthy();
  });



  it('should display time format', () => {
    
    const input =  [{
      "id": 1,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 12:59:22 GMT+0530 (India Standard Time)",
     
    },
    {
      "id": 2,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 12:58:22 GMT+0530 (India Standard Time)",
     
    }];

    const output =  [{
      "id": 2,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 12:58:22 GMT+0530 (India Standard Time)",
     
    },
    {
      "id": 1,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 12:59:22 GMT+0530 (India Standard Time)",
     
    }];

    const pipe = new AdminFlightPipe();
   
    const result = pipe.transform(input);

    expect(result[0].id).toEqual(input[0].id);

});
});
