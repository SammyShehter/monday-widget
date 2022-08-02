import { ObjectId } from "$mongo"

export interface TipsSchema {
    _id: ObjectId
    text: string
}

export interface CardProps {
    viewed: boolean;
    // deno-lint-ignore no-explicit-any
    children: any;
}
