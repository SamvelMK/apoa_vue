import Consent from '@/components/Consent.vue';
import Refuse from '@/components/Refuse.vue';
import Demographics from '@/components/Demographics.vue';
import Pil from '@/components/Pil.vue';
import Maslach from '@/components/Maslach.vue'

export const routes = [
    {path: '', component: Consent},
    {path: '/refuse', component: Refuse},
    {path: '/demographics', component: Demographics},
    {path: '/Pil', component: Pil},
    {path: '/Maslach', component: Maslach}
]