<template>
    <div>
        <header>
            <!-- Hacker News header -->
            <!-- Hacker News header -->
            <select v-model="newsType" @change="changeType">
                <!-- Type options -->
                <option>{{newsType}}</option>
            </select>
        </header>

        <div v-for="(item, $index) in list" :key="$index">
            <!-- Hacker News item loop -->
            
            {{item}}
        </div>

        <infinite-loading spinner="bubbles" :identifier="infiniteId" @infinite="infiniteHandler">
                <div slot="spinner">Loading...</div>
        <div slot="error" slot-scope="{ trigger }">
    Error message, click <a href="javascript:;" @click="trigger">here</a> to retry
  </div>
        </infinite-loading>
        <!-- <infinite-loading direction="top" @infinite="infiniteHandler"></infinite-loading> -->
        <!-- 맨위로 올라가면 중간으로 내려가서 올라가는 기능 -->


    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';

    import axios from 'axios';

    const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

    export default {
        components: {
            InfiniteLoading
        },
        
        data() {
            return {
                page: 1, 
                list: [],
                newsType: 'story',
                infiniteId: +new Date(),
                };
        },

        methods: {
            infiniteHandler($state) {
                axios
                    .get(api, {
                        params: {
                            page: this.page,
                            tags: this.newsType,
                        }
                    })
                    .then(({data}) => {
                        if (data.hits.length) {
                            this.page += 1;
                            this
                                .list
                                .push(...data.hits);
                            this.list.unshift(...data.hits.reverse());
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    });
            },
            changeType() {
             this.page = 1;
             this.list = [];
             this.infiniteId += 1;
            },
        },
    };
</script>

<style></style>