'use client'

import { LiaFlagUsaSolid } from "react-icons/lia"
import { GiBrazilFlag } from "react-icons/gi"
import './styles.sass'
import { Link, usePathname } from "../../../navigation"
import { useTranslations } from 'next-intl'

export const ToggleLang = () => {
    const t = useTranslations('toggleLang')
    const pathname = usePathname()
    return (
        <div className="container">
            <h1 className="title">{t('title')}</h1>
            <div className="content">
                <Link
                    className='toogle-button'
                    href={pathname}
                    locale="en"
                >
                    <LiaFlagUsaSolid className='icon'/>
                </Link>
                <Link
                    className='toogle-button'
                    href={pathname}
                    locale="pt"
                >
                    <GiBrazilFlag className='icon'/>
                </Link>
            </div>
        </div>
    )

}