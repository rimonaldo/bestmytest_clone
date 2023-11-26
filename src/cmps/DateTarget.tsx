import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';

type Props = {}

const DateTarget = (props: Props) => {
    return (
        <section className='date-target-wrapper'>
            <header className='date-target-header'>
                <h2>Test Date & Target Scores</h2>
            </header>

            <div className="content-wrapper">

                <div className="date-picker">
                    <span className='label'>click the calendar to set your test date!</span>
                    <button className='calendar'>
                        <CalendarTodayIcon className='box' style={{ fontSize: '70px' }} />
                        <CreateIcon className='pen' style={{ fontSize: '36px' }} />
                    </button>

                    <div className="date-selected">
                        Dec 13, 2023 (Wed)
                    </div>

                </div>

                <div className="target-scores">
                    <table className="scores">
                        <thead>
                            <tr>
                                <th scope="col">Target Score</th>
                                <th scope="col">Score Averages</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Reading
                                    <td className='score'>30 / 30</td>
                                </td>
                                <th >Reading</th>

                            </tr>

                            <tr>
                                <td>
                                    Listening
                                    <td className='score'>30 / 30</td>
                                </td>
                                <th >Listening</th>
                            </tr>

                            <tr>
                                <td>
                                    Speaking
                                    <td className='score'>30 / 30</td>
                                </td>
                                <th >Speaking</th>
                            </tr>
                            <tr className='last'>

                                <td>
                                    Writing
                                    <td className='score'>30 / 30</td>
                                </td>
                                <th >Writing</th>
                                {/* <th scope='col' colSpan={2} className='line'></th> */}
                            </tr>
                            <tr className='line'>
                                <th scope='col' colSpan={2} ></th>
                            </tr>

                            <tr className="overall">
                                <td>Overall
                                    <td className='score'>120 / 120</td>
                                </td>
                                <th >Overall</th>
                            </tr>

                            <tr className='edit'>
                                <button><CreateIcon />
                                    <span>Edit Target Scores
                                    </span>
                                </button>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </section>
    )
}

export default DateTarget