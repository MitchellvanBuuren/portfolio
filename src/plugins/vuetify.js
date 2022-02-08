import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
            light: {
                primary: '#15CDCA',
                background: '#F4F3EE'
            },
            dark: {
                primary: '#15CDCA',
                background: '#212129'
            },
        },
    },
});
