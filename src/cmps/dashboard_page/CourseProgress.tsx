import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
type Props = {}

const CourseProgress = (props: Props) => {
    return (
        <section className='course-progress-container'>
            <header>
                <h2>Course Progress</h2>
            </header>
            <div className="progress-gallery-container">
                <div className="content-wrapper">
                    <div className="img-wrapper">
                        <div className="dashed-border"></div>
                        <div className="locked-wrapper">
                            <div className="lock">
                                <LockOutlinedIcon style={{ fontSize: '42px' }} />
                            </div>
                            <span >Keep practicing!</span>
                        </div>
                        <img src="https://www.bestmytest.com/sites/all/modules/custom/toefl_study_plan/imgs/progress/progress.jpg" alt="" />
                    </div>

                    <div className="img-wrapper">
                        <div className="dashed-border"></div>
                        <div className="locked-wrapper">
                            <div className="lock">
                                <LockOutlinedIcon style={{ fontSize: '42px' }} />
                            </div>
                            <span >Keep practicing!</span>
                        </div>
                        <img src="https://www.bestmytest.com/sites/all/modules/custom/toefl_study_plan/imgs/pie.jpg" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CourseProgress