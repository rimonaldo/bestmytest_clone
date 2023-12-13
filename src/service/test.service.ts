
import { Test } from "../types/TestType";
import asyncLocalStorage from "./asyncLocalStorage";

class TestService {
    private tests: Test[];

    constructor() {
        this.tests = [];
        this.fetchTests();

        console.log('testService', this.tests);

    }

    fetchTests(): Promise<Test[]> {
        return asyncLocalStorage.getItem('test')
            .then((tests) => {
                if (tests) {
                    const fetchedTests = JSON.parse(tests);

                    if (typeof fetchedTests == typeof this.tests) {
                        this.tests = fetchedTests
                        console.log('succses fetching');
                        console.log('fetchTests', this.tests);
                    }else{
                        console.log('error fetching');
                        
                    }

                }
                return this.tests;
            })
            .catch((error) => {
                console.error(error);
                return [];
            });
    }

    public createTest(test: Test): void {
        this.tests.push(test);
    }

    public getTests(): Test[] {
        return this.tests;
    }

    public getTestById(id: string): Test | undefined {
        const test = this.tests.find((test) => test.id === id);
        console.log('getTestById', test);
        
        return test
    }


    public updateTest(id: string, updatedTest: Test): void {
        const index = this.tests.findIndex((test) => test.id === id);
        if (index !== -1) {
            this.tests[index] = updatedTest;
        }
    }

    public deleteTest(id: string): void {
        this.tests = this.tests.filter((test) => test.id !== id);
    }
}

const testService = new TestService();

export { testService };