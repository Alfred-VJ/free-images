import { NEXT_BEFORE } from "../actionsType/buttons.type";

const nextAndBefore = (r_or_l) => {
    return {
        type: NEXT_BEFORE,
        payload: r_or_l
    }
}

export const actionsButtons = {
    nextAndBefore,
}