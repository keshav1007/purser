import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CapacityGraphService {
    constructor(private http: HttpClient) {

    }

    public getCapacityData(view?, type?, name?) {
        let _devUrl: string = './json/capacity.json';
        let _url: string = 'http://localhost:3030/metrics';

        if (type) {
            _url = _url + '/' + type;
        }

        if (view && !name) {
            _url = _url + '?view=physical';
        }

        if (name) {
            _url = _url + '?name=' + name;
            _devUrl = './json/capacity1.json'; //testing purpose
        }

        //console.log(_url);

        return this.http.get(_url, {
            observe: 'body',
            responseType: 'json'
        });
    }
}