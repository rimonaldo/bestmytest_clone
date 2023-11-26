import React from 'react'
import ScoreForcast from './ScoreForcast';
import DateTarget from './DateTarget';
import CourseProgress from './CourseProgress';
type Props = {}

const DashboardPage = (props: Props) => {
    return (
        <div className='dashboard-page'>
            <DateTarget />
            <ScoreForcast />
            <CourseProgress />
        </div>
    )
}

export default DashboardPage