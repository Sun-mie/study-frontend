<template>
    <base-card>
        <!-- 컴포넌트 내부에 @이벤트를 설정하지 않아도 호출하는 뷰에서 추가하면 자동으로 반영되어 작동되는 원리 -->
        <base-button @click="setSelectedTab('stored-resources')"
                     :mode="storedResButtonMode">Stored resources</base-button>
        <base-button @click="setSelectedTab('add-resource')"
                     :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <!-- :is로 어떤 컴포넌트를 불러올지 알리는 것 -->
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            resources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.org'
                }
            ]
        };
    },
    provide(){ //자식컴포넌트들이 접근할 수 있게 됨.
        return {
            resources: this.resources,
            addResources: this.addResources,
            deleteResource: this.deleteResource
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResources(title, des, url){
            const newResources = {
                id: new Date().toISOString(),
                title: title,
                description: des,
                link: url
            };
            this.resources.unshift(newResources);
            this.selectedTab = 'stored-resources'
        },
        deleteResource(resId){
            const resIndex = this.resources.findIndex(res => res.id === resId);
            this.resources.splice(resIndex, 1);
        }
    },
    computed: {
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? null:'flat';
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resource' ? null:'flat';
        }
    }
}
</script>
