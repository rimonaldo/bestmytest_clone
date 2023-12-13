import React, { useState, useEffect } from 'react'
import useStore from '../../store/testStore'
import { Test } from '../../types/TestType'

type Props = {
    test: Test | null
}

const TestPage = (test: Props) => {
    const [questionShown, setQuestionShown] = useState(0)
    const { pageQuestion, questionIdx } = useStore()

    // load test on mount


    // log test
    useEffect(() => {
        console.log(test + 'from test page')
    }, [test])

    // page question
    useEffect(() => {
        console.log(questionIdx)
    }, [questionShown])




    return (
        <div className='test-page-container'>
            <div className="article-container">
                <header>
                    <h2>The Mysteries of Dark Matter in the Universe</h2>
                </header>
                <p><span className='p-number'>[1]</span> In the vast expanse of space, an unseen force silently shapes the cosmos. This mysterious entity, known as dark matter, eludes direct observation, yet its gravitational pull is a fundamental force driving the universe's structure. Dark matter, making up about 27% of the universe, contrasts starkly with the mere 5% of ordinary, visible matter, leaving scientists to grapple with its enigmatic nature.
                </p>
                <p><span className='p-number'>[2]</span> The concept of dark matter emerged from the observation that something invisible was exerting a gravitational influence on stars and galaxies. Initially posited by astronomer Fritz Zwicky in the 1930s, he noticed that galaxies in clusters moved as if under the influence of greater mass than visible. This led to the hypothesis of unseen matter, providing the scaffolding for the formation and movement of galaxies. Over decades, the idea evolved, supported by further evidence like the rotation speeds of galaxies, which defied the gravitational pull expected from visible matter alone.</p>
                <p><span className='p-number'>[3]</span> Astrophysicists employ a variety of methods to infer the presence of dark matter. One primary technique involves observing the gravitational lensing effect, where light from distant galaxies is bent around massive objects, hinting at the presence of invisible mass. Additionally, the cosmic microwave background radiation, a relic of the Big Bang, offers clues about the distribution of dark matter in the early universe. Dark matter's role extends beyond mere existence; it's thought to be crucial in the formation of galaxies and the overall architecture of the cosmos, influencing the fabric of space-time itself.</p>
            </div>
            <div className="questions-container">
                <div className="body">
                    { 'f u'}
                </div>

                <div className="answers">
                    <div className="answer">
                        <input type="radio" name="answer" id="answer1" />
                        <label htmlFor="answer1">The vast expanse of space</label>
                    </div>
                    <div className="answer">
                        <input type="radio" name="answer" id="answer2" />
                        <label htmlFor="answer2">The universe's structure</label>
                    </div>
                    <div className="answer">
                        <input type="radio" name="answer" id="answer3" />
                        <label htmlFor="answer3">Dark matter</label>
                    </div>
                    <div className="answer">
                        <input type="radio" name="answer" id="answer4" />
                        <label htmlFor="answer4">Gravity</label>
                    </div>
                </div>

                <div className="pagination">
                    <button className='btn'>Back</button>
                    <button className='btn' onClick={() => pageQuestion(questionIdx + 1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default TestPage