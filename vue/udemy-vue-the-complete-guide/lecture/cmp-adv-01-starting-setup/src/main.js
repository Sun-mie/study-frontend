import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('base-card', BaseCard);

app.mount('#app');
