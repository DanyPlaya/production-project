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
const root = createRoot(container);
root.render(
    <ErrorBoundary fallback={<PageError />}>
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    </ErrorBoundary>
);
