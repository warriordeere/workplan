'use client'

import { useEffect, useState } from 'react';

import '@style/calendar.css'

import { LocalizeDayType } from '@script/utils';

import { CalendarDayType } from "@shared/types/calendar.types";
import { EmployeeObject } from '@shared/types/employee.types';
import { SidebarInterface } from '@/shared/types/bars.types';

const weekDays: CalendarDayType[] = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
]

const employees: EmployeeObject[] = [
    {
        first_name: "Max",
        last_name: "Müller",
        granted_holiday: 25
    },
    {
        first_name: "Heinz",
        last_name: "Zimmermann",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Heinz Herbert",
        last_name: "Strack-Tschankowski",
        granted_holiday: 12
    },
    {
        first_name: "Nadine",
        last_name: "Schmidt",
        granted_holiday: 23
    }
]

export function CalendarHeadRow() {
    return (
        <div className='calendar-head-row'>
            {
                weekDays.map((day) => {
                    return (
                        <CalendarHeadRowItem key={day} label={day} />
                    );
                })
            }
        </div>
    );
}

function CalendarHeadRowItem({ label }: { label: CalendarDayType }) {

    const [locale, setLocale] = useState<string>('en-US');

    useEffect(() => {
        const clientLocale = navigator.language || 'en-US';
        setLocale(clientLocale);
    }, [])

    return (
        <div className="calendar-head-item">
            <h3>{LocalizeDayType(label, locale)}</h3>
        </div>
    );
}

export function CalendarRow() {
    return (
        <div className='calender-row-container'>
            {
                employees.map((item) => {
                    const label: SidebarInterface = {
                        primary_label: item.last_name,
                        secondary_label: item.first_name
                    }

                    return (
                        <div className="calendar-row">
                            <RowItemLabel key={item.last_name} item={label} />
                            <RowItemContent />
                        </div>
                    )
                })
            }
        </div>
    );
}

function RowItemLabel({ item }: { item: SidebarInterface }) {
    return (
        <div className="row-item-label-container">
            <div className="row-item-label">
                <h4 className="row-item-primary-label">{item.primary_label},</h4>
            </div>
            <div className="row-item-label">
                &nbsp;<p className="row-item-secondary-label">{item.secondary_label}</p>
            </div>
        </div>
    );
}

function RowItemContent() {
    return (
        <div></div>
    );
}