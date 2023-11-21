import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
type Props = {}

const DashboardPage = (props: Props) => {
    return (
        <div className='dashboard-page'>
            <header className='dashboard-page-header'>
                <h2>Test Date & Target Scores</h2>
            </header>
            <div className="img-wrapper">
                <div className="locked-wrapper">
                    <div className="lock">
                        <LockOutlinedIcon style={{ fontSize: '42px' }} />
                    </div>
                    <span>We are collecting data on your performance.</span>
                </div>
                <img src="https://www.bestmytest.com/sites/all/modules/custom/toefl_study_plan/imgs/forecast/overall-forecast.png" alt="" />
            </div>
        </div>
    )
}

export default DashboardPage