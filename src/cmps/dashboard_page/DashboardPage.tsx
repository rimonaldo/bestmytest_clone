import React, { useState, useEffect, useRef } from 'react';
import ScoreForcast from './ScoreForcast';
import DateTarget from './DateScoreTarget';
import CourseProgress from './CourseProgress';
import DateSelector from './DateSelector';
import SuccessRate from './SuccessRate';

type Props = {}

const DashboardPage = (props: Props) => {
    const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
    const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

    const onOpenDateSelector = () => {
        const isOpen = !isDateSelectorOpen;
        setIsDateSelectorOpen(isOpen);
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }



    return (
        <div className='dashboard-page '  >
            <DateTarget openCalendar={() => onOpenDateSelector} />
            <DateSelector setIsDateSelectorOpen={() => onOpenDateSelector} isDateSelectorOpen={isDateSelectorOpen} />
            <ScoreForcast />
            <CourseProgress />
            <SuccessRate />
        </div>
    )
}

export default DashboardPage;
