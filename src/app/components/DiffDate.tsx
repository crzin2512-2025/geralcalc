"use client"

import { Calendar } from "@/components/ui/calendar"
import React, { useState } from "react"

export const DiffDate = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <section className="h- bg-amber-500 flex gap-20 items-center justify-center">
            <div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border"
                />
            </div>
            <div>resultado-data</div>
            <div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border"
                />
            </div>
        </section>
    )
}