import { useState } from 'react'
import TestList from './TestList'
import TestItem from './TestItem'
import { useQuery } from 'react-query'
import axios from 'axios'
type Props = {}

const TestListPage = (props: Props) => {

    const [testId, setTestId] = useState('1') // TODO: get from url params [testId
    const { data } = useQuery('test', () => axios('http://localhost:5000/test'))

    return (
        <div>
            <TestList tests={data?.data} />
            <TestItem />
        </div>
    )
}

export default TestListPage