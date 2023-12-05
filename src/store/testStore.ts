import { create } from 'zustand'
import { TestScore } from '../types/TestType'


type Store = {
    targetScore: TestScore
    setTargetScore: (score: TestScore) => void
}

const useStore = create<Store>()((set) => ({
    targetScore: {
        reading: 0,
        listening: 0,
        speaking: 0,
        writing: 0,
        overall: 0,
    },
    setTargetScore: (score) => set({ targetScore: score }),
}))

export default useStore
