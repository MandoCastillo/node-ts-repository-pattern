import { MovementType } from "../common/emuns/movement-type";


interface MovementCreateDto {
    type: MovementType;
    user_id: number;
    amount: number;
}

export {
    MovementCreateDto
}