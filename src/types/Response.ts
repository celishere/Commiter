import { InlineKeyboardButton } from "telegraf/src/core/types/typegram";

import { Hideable } from "./Types";

export interface Response {
    text: string;
    added: number;
    removed: number;
    button: Hideable<InlineKeyboardButton.UrlButton>
}

export interface GenerateResponse {
    text: string;
    keyboard: any;
}