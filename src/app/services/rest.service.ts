import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";


@Injectable()

export class RestManager extends BaseService {

    private REST_API_SERVER = "http://localhost:3000/apiService/api";

    restPdf() {
        return this.getCallService1(`${this.REST_API_SERVER}` + "/pdf");
    }

    restExcel() {
        return this.getCallService1(`${this.REST_API_SERVER}` + "/excel");
    }
}
