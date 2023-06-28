import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Counter />
            {t('Главная страница')}
        </div>
    );
};
export default MainPage;
