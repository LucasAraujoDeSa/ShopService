import { ApiProperty } from "@nestjs/swagger";

export class AddProductInputSchema{
    @ApiProperty({ 
        example: "Notebook Gamer", 
        description: 'product name' 
    })
    name: string;

    @ApiProperty({ 
        example: "1000", 
        description: 'product price' 
    })
    price: number;

    @ApiProperty({ 
        example: "60", 
        description: 'product quantity' 
    })
    quantity: number;
}

export class AddProductOutputSchema{
    @ApiProperty({ 
        example: "1dc1e765-881e-416c-a514-f05cc65bdf41", 
        description: 'product id' 
    })
    id: string;

    @ApiProperty({ 
        example: "Notebook Gamer", 
        description: 'product name' 
    })
    name: string;

    @ApiProperty({ 
        example: "1000", 
        description: 'product price' 
    })
    price: number;

    @ApiProperty({ 
        example: "60", 
        description: 'product quantity' 
    })
    quantity: number;
}