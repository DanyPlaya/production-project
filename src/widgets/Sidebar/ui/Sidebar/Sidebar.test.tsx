import {
    fireEvent, getByTestId, render, screen,
} from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('InTheDocument', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });
    test('testToggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
