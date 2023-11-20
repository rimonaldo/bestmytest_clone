import React, { ReactElement } from 'react'
type Props = {
    isActive: boolean
    icon: React.ReactNode;
    title: string
    idx: number
}

const SidebarMenuItem = ({ isActive, icon, title, idx }: Props) => {
    return (
        <div className='sidebar-menu-item'>
            <div >
                {icon}
            </div>
            {title}
        </div>
    )
}

export default SidebarMenuItem