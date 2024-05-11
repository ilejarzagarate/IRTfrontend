import { createAction } from "@ngrx/store";

export const increment = createAction('[Pagination Component] Increment');
export const decrement = createAction('[Pagination Component] Decrement');
export const firstPage = createAction('[Pagination Component] First');
export const lastPage = createAction('[Pagination Component] Last');