export class Utils {
    static buildProgress(progress: number) {
        return progress;
    }

    static pathToRegex(path: string) {
        return new RegExp(
            "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
        );
    }
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
