import React, {useState} from 'react'

type Props = {
  svgName: string
}

const MenuItemSVG = (svgName: Props) => {
  return (
    <div className={`tutor ${svgName ? 'show' : ''}`}>

    </div>
  )
}

export default MenuItemSVG