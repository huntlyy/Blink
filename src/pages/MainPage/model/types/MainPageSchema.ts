import { EntityState } from "@reduxjs/toolkit";
import { ItemMovie } from "entities/Movie";

export interface MainPageSchema extends EntityState<ItemMovie> {
    isLoading?: boolean
    error?: string
}