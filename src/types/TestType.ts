import { Section } from './Section'

export interface TestScore {
    reading: number
    listening: number
    speaking: number
    writing: number
    overall: number
}


export interface Test {
    id?: string,
    section: { reading: Section, listening: Section, speaking: Section, writing: Section }
    score: TestScore,
}