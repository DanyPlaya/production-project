import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'react-error-boundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { PageError } from 'widgets/PageError';
import App from './app/App';
import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
    throw new Error('main contrainer not found');
}
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
