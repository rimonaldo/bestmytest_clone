import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
type Props = {}

const CourseProgress = (props: Props) => {
    return (
        <section>
            <header>
                <h2>Course Progress</h2>
            </header>
            <div className="content-wrapper">
                <div className="img-wrapper">
                    <div className="dashed-border"></div>
                    <div className="locked-wrapper">
                        <div className="lock">
                            <LockOutlinedIcon style={{ fontSize: '42px' }} />
                        </div>
                        <span >We are collecting data on your performance.</span>
                    </div>
                    <img src="https://www.bestmytest.com/sites/all/modules/custom/toefl_study_plan/imgs/forecast/overall-forecast.png" alt="" />
                </div>
            </div></section>
    )
}

export default CourseProgress