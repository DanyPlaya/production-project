import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const toggleError = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) { throw new Error(); }
    }, [error]);
    return (
        <Button
            onClick={toggleError}
            className={classNames('cls.BugButton', {}, [className])}
        >
            {t('throw Error')}
        </Button>
    );
};
