import * as React from "react"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

export function Calendar21() {


  return (
    <div className="rounded-xl bg-card text-card-foreground shadow flex flex-col h-full">
      <div className="flex flex-col space-y-1.5 ">
        <h3 className="font-semibold text-lg leading-none tracking-tight mt-2 mb-7">Expense Calendar</h3>
      </div>
      <div className="p-6 pt-0 flex-grow flex items-center justify-center">
        <Calendar
          mode="range"
          numberOfMonths={1}
          className="bg-transparent w-full" //w-full makes the width 100%, remove to make it default
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6;
              
              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    {children}
                    {!modifiers.outside && (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {isWeekend ? "₹220" : "₹100"}
                      </span>
                    )}
                  </div>
                </CalendarDayButton>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
