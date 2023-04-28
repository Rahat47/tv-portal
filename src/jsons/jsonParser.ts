interface SvgItem {
    type: "SVG";
    html: string;
}

interface TitleItem {
    type: "Title";
    class?: string;
}

interface TextItem {
    type: "Text";
    message: string;
    class?: string;
}

interface CarouselItem {
    type: "Carsousel";
    class?: string;
    items: {
        name: string;
        image: string;
        path: string;
    }[];
}

type JsonItem = SvgItem | TitleItem | TextItem | CarouselItem;

function parseJson(json: string): JsonItem[] {
    return JSON.parse(json) as JsonItem[];
}

export { parseJson };
