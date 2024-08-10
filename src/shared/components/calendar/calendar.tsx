import { CalendarDayType } from "@shared/types/calendar.types";

export function Calendar() {

    const weekDays: CalendarDayType[] = [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun",
    ]

    return (
        <section className="calendar">
            {
                weekDays.map((day) => {
                    return (
                        <CalendarRow key={day} label={day} />
                    );
                })
            }
        </section>
    );
}

function CalendarRow({ label }: { label: string }) {
    return (
        <div className="calendar-row">
            <header className="row-head">
                <h3>{label}</h3>
            </header>
            <div className="row-body"></div>
        </div>
    );
}