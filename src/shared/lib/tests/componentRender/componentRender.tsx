import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTest';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}
export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {}
) {
    const { route = RoutePath.main, initialState } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}
