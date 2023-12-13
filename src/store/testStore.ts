import { create } from 'zustand';
import { TestScore, Test } from '../types/TestType';
import { testService } from '../service/test.service';

type Store = {
    targetScore: TestScore;
    setTargetScore: (score: TestScore) => void;
    test: Test | null; // Changed to allow null for initialization
    initialTest: Test ;
    setTest: (test: Test) => void;
    loadTest: (id: string) => Promise<void>;
    questionIdx: number;
    pageQuestion: (idx: number) => void;
};

// Initializing the test as null to indicate no test is loaded initially
const useStore = create<Store>((set) => ({
    targetScore: {
        reading: 0,
        listening: 0,
        speaking: 0,
        writing: 0,
        overall: 0,
    },
    setTargetScore: (score) => set({ targetScore: score }),
    test: null, // Initial value set to null
    initialTest: {
        id: '',
        duration: 0,
        sections: [],
    },
    setTest: (test) => set({ test }),
    loadTest: async (id) => {
        try {
            const test = await testService.getTestById(id);
            set({ test });
        } catch (error) {
            console.error('Error loading test:', error);
            // Handle error, e.g., set an error state, show a message, etc.
        }
    },
    questionIdx: 0,
    pageQuestion: (idx) => set({ questionIdx: idx }),
}));

export default useStore;
