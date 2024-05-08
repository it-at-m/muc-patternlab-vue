import { addons } from '@storybook/manager-api';
import mucTheme from './MucTheme';

addons.setConfig({
    theme: mucTheme,
});