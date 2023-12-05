import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type Props = {}

const SuccessRate = (props: Props) => {
    return (
        <section className="section-success-rate feature">
            <header>
                <h2>Success Rate</h2>
            </header>
            <div className="content-wrapper" >
                <div className="img-wrapper">
                    <div className="dashed-border"></div>
                    <div className="locked-wrapper">
                        <div className="lock">
                            <LockOutlinedIcon style={{ fontSize: '42px' }} />
                        </div>
                        <span >Complete reading & listening questions to unlock this table.</span>
                    </div>
                    <img src="https://www.bestmytest.com/sites/all/modules/custom/toefl_study_plan/imgs/success-rates.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default SuccessRate