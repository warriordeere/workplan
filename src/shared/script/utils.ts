import { CalendarDayType } from "../types/calendar.types";

export function LocalizeDayType(day_type: CalendarDayType, locale: string): string {
    const dayMap: { [key in CalendarDayType]: number } = {
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6,
        sun: 0
    };

    const dayNumber = dayMap[day_type];
    const date = new Date(Date.UTC(1970, 0, 4 + dayNumber));

    return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
}