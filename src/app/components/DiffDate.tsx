"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

function calcDiffDays(start: Date | undefined, end: Date | undefined) {
    if (!start || !end) return null

    const diferenca = end.getTime() - start.getTime()
    const dias = diferenca / (1000 * 60 * 60 * 24)
    return Math.round(Math.abs(dias))
}

export const DiffDate = () => {
    const [dateStart, setDateStart] = useState<Date | undefined>(new Date())
    const [dateFinal, setDateFinal] = useState<Date | undefined>(new Date())

    const diffDays = calcDiffDays(dateStart, dateFinal)

    return (
        <section className="w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-10 mx-auto">
            <div className="w-full min-w-0 max-w-sm flex justify-center">
                <Calendar
                    mode="single"
                    selected={dateStart}
                    onSelect={setDateStart}
                    className="rounded-lg border"
                />
            </div>
            <div className="text-center w-full min-w-0 lg:w-auto">
                <p className="text-lg font-medium break-words">
                    {diffDays !== null ? `Diferença de dias: ${diffDays}` : "Escolha as duas datas"}
                </p>
            </div>
            <div className="w-full min-w-0 max-w-sm flex justify-center">
                <Calendar
                    mode="single"
                    selected={dateFinal}
                    onSelect={setDateFinal}
                    className="rounded-lg border"
                />
            </div>
        </section>
    )
}