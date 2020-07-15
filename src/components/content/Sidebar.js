import React from 'react'

import Menu from './Menu'

export default function Sidebar({countries}) {

    return (
        <div className="Sidebar">
            <Menu countries={countries}/>
        </div>
    )
}
