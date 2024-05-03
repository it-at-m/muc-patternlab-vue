import MucBanner from './MucBanner.vue';

export default {
    component: MucBanner,
    title: 'MucBanner',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Default = {
    args: {
        type: "info"
    },
};

export const Warning = {
    args: {
        type: "warning"
    },
};

export const Emergency = {
    args: {
        type: "emergency"
    },
};