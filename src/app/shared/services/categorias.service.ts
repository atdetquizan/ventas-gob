import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    constructor(private http: HttpClient) {}
    
    get() {
        return this.http.get<any[]>(`${environment.api}/categories`);
    }

    post(params: any) {
        return this.http.post(`${environment.api}/categories`, params);
    }
}