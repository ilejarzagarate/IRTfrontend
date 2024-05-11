import { createReducer, on } from "@ngrx/store";
import { increment, decrement, firstPage } from "../shared/pager.actions";
import { state } from "@angular/animations";
import { first } from "rxjs";

export const initialState = 0;

export const pageReducer = createReducer(
    initialState,
    on(increment, (state) => state +1),
    on(decrement, (state) => state - 1),
    on(firstPage, (state) => 0)
    
);