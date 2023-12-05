import React, { useRef } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import useOutsideClick from '../../hooks/useOutsideClick';

type Props = {
    isDateSelectorOpen: boolean
    setIsDateSelectorOpen: () => void
}

const DateSelector = ({ isDateSelectorOpen, setIsDateSelectorOpen }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        if (isDateSelectorOpen) setIsDateSelectorOpen()

    });

    return (
        <div ref={ref} className={`date-selector ${isDateSelectorOpen ? '' : 'hidden'} `}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
        </div>
    )
}

export default DateSelector