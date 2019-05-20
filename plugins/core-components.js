// Register Global Components
import Vue from 'vue';
import BaseHeading from '@/components/UI/BaseHeading.vue';
import BaseButton from '@/components/NewTemplateComponents/SubComponents/BaseButton.vue'
import BaseColumn from '@/components/NewTemplateComponents/SubComponents/BaseColumn.vue'
import HeaderImage from '@/components/NewTemplateComponents/HeaderImage.vue'
import SingleApparel from '@/components/NewTemplateComponents/SingleApparel.vue'
import SingleFootwear from '@/components/NewTemplateComponents/SingleFootwear.vue'
import TwoColumnApparel from '@/components/NewTemplateComponents/TwoColumnApparel.vue'
import TwoColumnFootwear from '@/components/NewTemplateComponents/TwoColumnFootwear.vue'
import TextAndCta from '@/components/NewTemplateComponents/TextAndCta.vue'


Vue.component('BaseHeading', BaseHeading);
Vue.component('BaseButton', BaseButton);
Vue.component('BaseColumn', BaseColumn);
Vue.component('HeaderImage', HeaderImage);
Vue.component('SingleApparel', SingleApparel);
Vue.component('SingleFootwear', SingleFootwear);
Vue.component('TwoColumnApparel', TwoColumnApparel);
Vue.component('TwoColumnFootwear', TwoColumnFootwear);
Vue.component('TextAndCta', TextAndCta);
