import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    icons: {
        iconfont: 'md' || 'fa' || 'md'
    },
    theme: {
        themes: {
            light: {
                primary: '#7C92FE'
            }
        }
    },
    components,
    directives
});
