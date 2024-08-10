import '@style/globals.css'

import { EmployeeObject } from '@shared/types/employee.types'

import { Calendar } from '@components/calendar/calendar'
import { Sidebar } from '@components/bars/sidebar'
import { Topbar } from '@components/bars/topbar'

export const metadata = {
  title: 'Workplan'
}

export const employees: EmployeeObject[] = [
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
    first_name: "Heinz Herbert Maria Heinz Herbert Maria",
    last_name: "Zimmermann-Schmidt von Strack Heinz Herbert Maria",
    granted_holiday: 12
  },
  {
    first_name: "Nadine",
    last_name: "Schmidt",
    granted_holiday: 23
  }
]

export default function Layout() {
  return (
    <html lang="en">
      <body>
        <section className="app-container">
          <Topbar />
          <Sidebar />
          <Calendar />
        </section>
      </body>
    </html>
  )
}
