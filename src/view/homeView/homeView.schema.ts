import * as z from "zod";

const itemSchema = z.object({
    type: z.enum(["Text", "Carousel"]),
    message: z.string().optional(),
    class: z.string().optional(),
    items: z
        .array(
            z.object({
                id: z.coerce.number(),
                name: z.string(),
                image: z.string(),
                path: z.string(),
            })
        )
        .optional(),
});

const objectSchema = z.object({
    type: z.literal("Object"),
    position: z.enum(["Top", "Bottom"]),
    value: z.array(itemSchema),
});

const homeViewSchema = z.array(objectSchema);

export { homeViewSchema };
