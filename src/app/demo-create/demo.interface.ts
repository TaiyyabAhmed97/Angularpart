import { interceptingHandler } from "@angular/common/http/src/module";

export interface Demo{
    Customer: any;
    Rackets: Rackets[];
    CheckedOut: Date;
    ReturnDate: Date;

}

export interface Rackets{
    name: String;
}