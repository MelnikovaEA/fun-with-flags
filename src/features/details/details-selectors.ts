import { RootState } from "../../store.ts";

export const selectDetails = (state: RootState) => state.details;
export const selectNeighbors = (state: RootState) => state.details.neighbors;
