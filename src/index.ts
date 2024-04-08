import * as components from '@/components';

const componentsList: any = components?.default;
const MucComponents = {
    install(Vue: any) {
        Object.keys(componentsList).forEach(name => {
            Vue.component(name, componentsList[name]);
        })
    }
};

export default MucComponents;