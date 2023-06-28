import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTest';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface componentRenderOptions{
  route?: string
  initialState?: DeepPartial<StateSchema>
}
export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = RoutePath.main,
        initialState,
    } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
