'use client'

import {useState} from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import './styles.sass'

export const ToggleMode = () => {
    const [isDark, setDark] = useState(false)
    const toggleTheme = () => {
        setDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Seletor de Temas com Sass</h1>
                <button
                    aria-label='Toggle Dark mode'
                    className='toogle-button'
                    onClick={toggleTheme}
                >
                    {
                        isDark ? (
                            <MoonIcon className='icon' />
                        ) : (
                            <SunIcon className='icon' />
                        )
                    }
                </button>
            </div>
        </div>
    )

}