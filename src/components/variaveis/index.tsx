import { useTranslations } from 'next-intl'
import './styles.sass'

export const Variaveis = () => {
    const t = useTranslations('variables')
    return (
        <div>
            <h1 className="title">{t('title')}</h1>
            <h2 className="subtitle">{t('subtitle')}</h2>
        </div>
    )
}