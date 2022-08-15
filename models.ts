import { ObjectId } from "$mongo"

export interface TipsSchema {
    _id: ObjectId
    tip: string
    key: string
}

export interface CardProps {
    viewed: boolean;
    tip: string;
}