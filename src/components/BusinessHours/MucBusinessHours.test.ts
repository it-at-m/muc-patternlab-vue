import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import BusinessHoursToggle from './MucBusinessHours.vue'; // Pfad zur Komponente anpassen
import { h } from 'vue';

describe('BusinessHoursToggle', () => {
    let businessHours : Array<any>;

    beforeEach(() => {
        businessHours = [
            { weekDay: 'Mo', openingHours: [{ from: '09:00', to: '17:00' }] },
            { weekDay: 'Di', openingHours: [{ from: '09:00', to: '17:00' }] },
            { weekDay: 'Mi', openingHours: [] },
            { weekDay: 'Do', openingHours: [{ from: '09:00', to: '17:00' }] },
            { weekDay: 'Fr', openingHours: [{ from: '09:00', to: '17:00' }] },
            { weekDay: 'Sa', openingHours: [] },
            { weekDay: 'So', openingHours: [] },
        ];
    });

    it('renders the title and toggle button when toggleable is true', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
                toggleable: true,
            },
        });
        expect(wrapper.find('.m-business-hours-toggle__title').exists()).toBe(true);
        expect(wrapper.find('.m-business-hours-toggle__trigger').exists()).toBe(true);
    });

    it('does not render the toggle button when toggleable is false', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
                toggleable: false,
            },
        });
        expect(wrapper.find('.m-business-hours-toggle__trigger').exists()).toBe(false);
    });

    it('toggles the collapsed state when the button is clicked', async () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
                toggleable: true,
            },
        });
        expect(wrapper.vm.collapsed).toBe(true); // Initialzustand
        await wrapper.find('.m-business-hours-toggle__trigger').trigger('click');
        expect(wrapper.vm.collapsed).toBe(false); // Nach dem Klick
        await wrapper.find('.m-business-hours-toggle__trigger').trigger('click');
        expect(wrapper.vm.collapsed).toBe(true); // Nach erneutem Klick
    });

    it('computes the correct collapseClass based on collapsed state', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
                toggleable: true,
            },
        });
        expect(wrapper.vm.collapseClass).toBe('collapse');
        wrapper.vm.toggleCollapsable();
        expect(wrapper.vm.collapseClass).toBe('');
    });

    it('computes todaysBusinessHours correctly', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
            },
        });
        const today = new Date().toLocaleDateString('de-DE', { weekday: 'short' });
        const todaysHours = businessHours.find((bh) => bh.weekDay === today);
        expect(wrapper.vm.todaysBusinessHours).toEqual(todaysHours);
    });

    it('renders the correct opening hours for today', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
            },
        });
        const today = new Date().toLocaleDateString('de-DE', { weekday: 'short' });
        const todaysHours = businessHours.find((bh) => bh.weekDay === today);
        if (todaysHours) {
            const hoursText = todaysHours.openingHours.map(
                (time) => `${time.from} - ${time.to}`
            ).join(', ');
            expect(wrapper.html()).toContain(hoursText);
        }
    });

    it('renders "geschlossen" for days with no opening hours', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
            },
        });
        const closedDays = wrapper.findAll('.is-closed');
        expect(closedDays).toHaveLength(3);
        closedDays.forEach(day => {
            expect(day.text()).toContain('geschlossen');
        });
    });

    it('renders hint slot if provided', () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
                toggleable: true,
            },
            slots: {
                hint: () => h('div', 'This is a hint'),
            },
        });
        expect(wrapper.find('.hint').exists()).toBe(true);
        expect(wrapper.find('.hint').text()).toBe('This is a hint');
    });

    it('reacts to prop changes correctly', async () => {
        const wrapper = mount(BusinessHoursToggle, {
            props: {
                businessHours,
                toggleable: true,
            },
        });
        expect(wrapper.vm.collapsed).toBe(true);
        await wrapper.setProps({ toggleable: false });
        expect(wrapper.vm.collapsed).toBe(false);
        await wrapper.setProps({ toggleable: true });
        expect(wrapper.vm.collapsed).toBe(true);
    });
});
