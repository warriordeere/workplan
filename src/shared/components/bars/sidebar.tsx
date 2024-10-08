import '@style/bars.css'

import { employees } from "@/app/layout";
import { SidebarInterface } from "@shared/types/bars.types";

export function Sidebar() {
    return (
        <menu className="sidebar">
            {
                employees.map((item) => {
                    const label: SidebarInterface = {
                        primary_label: item.last_name,
                        secondary_label: item.first_name
                    }

                    return (
                        <SidebarItem key={item.last_name} item={label} />
                    )
                })
            }
        </menu>
    )
}

function SidebarItem({ item }: { item: SidebarInterface }) {
    return (
        <div className="sidebar-item">
            <div className="sidebar-label">
                <h4 className="sidebar-primary-label">{item.primary_label},</h4>
            </div>
            <div className="sidebar-label">
                &nbsp;<p className="sidebar-secondary-label">{item.secondary_label}</p>
            </div>
        </div>
    );
}