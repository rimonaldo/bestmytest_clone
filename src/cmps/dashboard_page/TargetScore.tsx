
import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { TestScore } from '../../types/TestType';

type Props = {
    isEditable: boolean
    setIsEditable: () => void
    submitTargetScore: (updatedTargetScore: TestScore) => void
    targetScore: TestScore
    averageScore: TestScore
}

const TargetScore = ({ isEditable, targetScore, averageScore, setIsEditable, submitTargetScore }: Props) => {
    const handleTargetScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (isEditable) {
            console.log('isEditable', e.target.value);
            if (value.length > 2) return
            if (value.length === 2 && value[0] === '0') return
            if (+value > 30) return
            const updatedTargetScore = { ...targetScore, [name]: parseInt(value) };
            submitTargetScore(updatedTargetScore)
        } else {
            return
        }

    };

    const formatName = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }


    const { reading, listening, speaking, writing } = averageScore
    const overall = reading + listening + speaking + writing
    const scores = [reading, listening, speaking, writing]
    return (
        <div className="target-scores">
            <table className="scores">
                <thead>
                    <tr>
                        <th scope="col">Target Score</th>
                        <th scope="col">Score Averages</th>
                    </tr>
                </thead>
                <tbody>

                    {scores.map((score, idx) => {
                        return (
                            <tr>
                                <td>
                                    {formatName(Object.keys(targetScore)[idx])}
                                    <td className='score'>
                                        <span className={`span ${isEditable ? 'editable' : ''}`}>
                                            <input
                                                contentEditable={isEditable}
                                                onChange={handleTargetScoreChange}
                                                name={Object.keys(targetScore)[idx]}
                                                type="number"
                                                placeholder={isEditable ? '' : '30'}
                                                maxLength={2}
                                                value={scores[idx]}
                                                max={30} />
                                        </span>
                                        / 30
                                    </td>
                                </td>
                                <th >{formatName(Object.keys(targetScore)[idx])}</th>
                                <th >0</th>

                            </tr>
                        )
                    })}

                    <tr className='line'>
                        <th scope='col' colSpan={2} ></th>
                    </tr>

                    <tr className="overall">
                        <td>Overall
                            <td className='score'>{overall} / 120</td>
                        </td>
                        <th >Overall</th>
                        <th >0</th>

                    </tr>

                    <tr className='edit-btn' onClick={setIsEditable}>
                        <button><CreateIcon />
                            <span>{isEditable ? 'Save' : 'Edit'} Target Score
                            </span>
                        </button>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}



export default TargetScore

