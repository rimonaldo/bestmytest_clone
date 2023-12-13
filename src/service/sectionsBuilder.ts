import AsyncLocalStorage from './asyncLocalStorage';
import { ReadingSection } from '../types/Section';

const asyncLocalStorage = new AsyncLocalStorage();


interface SectionsBuilder {
    buildReadingSection: (section: ReadingSection) => Promise<ReadingSection>;
}

class SectionsBuilderImpl implements SectionsBuilder {
    async buildReadingSection(section: ReadingSection): Promise<ReadingSection> {
        const article = await asyncLocalStorage.getItem('article');
        const questions = await asyncLocalStorage.getItem('questions');
        return {
            ...section,
            name: 'Reading',
            article: article || section.article,
            questions: questions ? JSON.parse(questions) : section.questions,
        };
    }

}

export default SectionsBuilderImpl;



