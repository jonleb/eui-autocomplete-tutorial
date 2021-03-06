import { GlobalConfig } from '@eui/core';

export const GLOBAL: GlobalConfig = {
    appTitle: 'eUI Autocomplete',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: [],
        },
        i18nLoader: {
            i18nFolders: ['i18n-eui', 'i18n', 'i18n-ecl'],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en',
        },
    },
};
