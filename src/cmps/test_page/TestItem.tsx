import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
type Props = {

}

const TestItem = (props: Props) => {
    return (
        <div className='test-item-container'>

            <header>
                <div className="left">
                    <div className="date"><span>Date:</span> Nov 16 , 23</div>
                    <button>Restart Full Test <span>*</span></button>
                </div>
                <div className="right">
                    <div className="score-meter">

                    </div>
                </div>
            </header>


            <div className="test-section-list">
                <div className="test-section-item">
                    <div className="top"></div>
                    <div className="flex">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
                <div className="test-section-item"></div>
                <div className="test-section-item"></div>
                <div className="test-section-item"></div>
            </div>
        </div>
    )
}

export default TestItem

