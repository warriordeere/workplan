import '@style/globals.css'

import { Topbar } from '@components/bars/topbar'
import { CalendarHeadRow, CalendarRow } from '@components/calendar/calendar'

export const metadata = {
  title: 'Workplan'
}

export default function Layout() {
  return (
    <html lang="en">
      <body>
        <section className="app-container">
          <Topbar />
          <section className="calendar">
            <CalendarHeadRow />
            <CalendarRow />
          </section>
        </section>
      </body>
    </html>
  )
}
