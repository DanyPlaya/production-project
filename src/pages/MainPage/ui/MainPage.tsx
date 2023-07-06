import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');
    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <div>
            <Input placeholder="Введите текст" value={value} onChange={onChange} />
            {t('Главная страница')}
        </div>
    );
};
export default MainPage;
