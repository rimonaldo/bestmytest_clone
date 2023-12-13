import React from 'react'

// import { Test } from '../../types/TestType'
import { Router, Link, Route, Routes } from 'react-router-dom'
import TestItem from './TestItem'
type Props = { tests: Test[] | null }

interface Test {
    id: number,
    name: string,
}

const TestList = ({ tests }: Props) => {


    return (
        <div className='test-list-container'>

            <ul>
                {tests?.map((test: Test) => {
                    return <li key={test.id}>{test.name} </li>
                })}
            </ul>
        </div>
    )
}

export default TestList