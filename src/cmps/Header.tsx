import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
type Props = {
    isCollapsed: boolean
    setIsCollapsed: (isCollapsed: boolean) => void
}

function Header({ isCollapsed,setIsCollapsed}: Props) {

    return (
        <div className={`header-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
            <div className={`arrow arrow-open ${isCollapsed ? 'collapsed' : ''}`} onClick={() => setIsCollapsed(!isCollapsed)}>
                <KeyboardArrowLeftIcon  style={{ fontSize: '1.5em', color: 'white' }} />
            </div>
            <h3 className='h-title'>TOEFL Tutor Dashboard</h3>
            <div className="h-action-box">
                <div className="btn btn-wide btn-red">
                    <AccountCircleIcon style={{ fontSize: '1.2em' }} />
                    Sign Up free
                </div>
                <div className="btn btn-regular btn-clear setting">
                    <SettingsIcon style={{ fontSize: '1.2em' }} />
                    <div className="btn-text">Setting</div>
                </div>
            </div>
        </div>
    )
}

export default Header