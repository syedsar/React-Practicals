import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const ReactIdleTimmer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const idleTimerRef = useRef(null)
    const seesionTimeOutRef = useRef(null)

    const idle = ()=>{
        console.log('User is Idle')
        setModalIsOpen(true) 
        seesionTimeOutRef.current = setTimeout(logout, 5000)
    }


    const stayIn = ()=>{
        setModalIsOpen(false);
        clearTimeout(seesionTimeOutRef.current)
        console.log('user still logged in')
    }

    const logout = ()=>{
        setModalIsOpen(false);
        setIsLoggedIn(false)
        clearTimeout()
        clearTimeout(seesionTimeOutRef.current)
        console.log('user logged out')
    }
    return (
        <div>
        {
            isLoggedIn ? <h1>Hello Syed</h1> : <h1>Hello Guest</h1>
        }
        <Modal isOpen={modalIsOpen}>
            <h2>you have been idle for a while</h2>
            <p>you will be logged out soon</p>
            <button onClick={logout}>Log me out</button>
            <button onClick={stayIn}>keep me signed in</button>
        </Modal>
            <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={idle}></IdleTimer>
        </div>
    )
}

export default ReactIdleTimmer
