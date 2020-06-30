import { CurrentFlightPipe } from './current-flight.pipe';

describe('CurrentFlightPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrentFlightPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display in phone format', () => {
    
    const input =  [{
      "id": 1,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 1:59:22 GMT+0530 (India Standard Time)",
      "arrival": "Mon May 25 2020 08:48:22 GMT+0530 (India Standard Time)",
     
    },
    {
      "id": 2,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 01:10:22 GMT+0530 (India Standard Time)",
      "arrival": "Mon May 25 2020 08:48:22 GMT+0530 (India Standard Time)",
     
    }];

    const output =  [{
      "id": 2,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 01:10:22 GMT+0530 (India Standard Time)",
      "arrival": "Mon May 25 2020 08:48:22 GMT+0530 (India Standard Time)",
     
    },
    {
      "id": 1,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 10:59:22 GMT+0530 (India Standard Time)",
       "arrival": "Mon May 25 2020 08:48:22 GMT+0530 (India Standard Time)",
     
    }];

    const pipe = new CurrentFlightPipe();
   pipe.currentDate.setTime(1.11);
    const result = pipe.transform(input);

    expect(result[0].id).toEqual(input[0].id);

});
});
