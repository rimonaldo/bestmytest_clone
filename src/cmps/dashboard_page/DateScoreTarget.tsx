import React, { useState } from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';
import TargetScore from './TargetScore';
import { TestScore } from '../../types/TestType';
import useStore from '../../store/testStore';


type Props = {
    openCalendar: () => void

}

const DateTarget = ({ openCalendar,  }: Props) => {

    const [isTargetScoreEditable, setIsTargetScoreEditable] = useState(false)
    const { setTargetScore, targetScore } = useStore()


    return (
        <section className='date-target-wrapper'>
            <header className='date-target-header'>
                <h2>Test Date & Target Scores</h2>
            </header>

            <div className="content-wrapper">

                <div className="date-picker">

                    <span className='label'>click the calendar to set your test date!</span>
                    <button className='calendar' onClick={() => openCalendar()}>
                        <CalendarTodayIcon className='box' style={{ fontSize: '70px' }} />
                        <CreateIcon className='pen' style={{ fontSize: '36px' }} />
                    </button>

                    <div className="date-selected">
                        Dec 13, 2023 (Wed)
                    </div>

                </div>

                <TargetScore
                    isEditable={isTargetScoreEditable}
                    setIsEditable={() => setIsTargetScoreEditable(!isTargetScoreEditable)}
                    submitTargetScore={(updatedTargetScore:TestScore) => setTargetScore(updatedTargetScore)}
                    targetScore={targetScore}
                    averageScore={targetScore}
                />
            </div>

        </section>
    )
}

export default DateTarget