import React from 'react'
import CountUp, {useCountUp} from 'react-countup'

const ReactCountup = () => {
    // const {countUp, start, reset, pauseResume, update} = useCountUp({duration:5, end : 10000, startOnMount: false})
    return (
        <div>
        {/* <div>
        <h1>
        {countUp}
        <br />
        <button onClick={start}>start</button>
        </h1>
        </div> */}
            <h1>
                <CountUp end={500} duration={5}/>
            </h1>
            <h1>
                <CountUp end={1000} duration={5}  prefix={'$'} decimals={2}/>
            </h1>
            <h1>
                <CountUp end={500} duration={5} suffix=' USD'/>
            </h1>
        </div>
    )
}

export default ReactCountup
