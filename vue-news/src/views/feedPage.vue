<template>
    <div id="app">
        <div class="view">
            {{user_type}}
            <button
                :class="[ user_type === 'all' ? 'selected' : '']"
                @click="update_source('all')">All Posts</button>
            <button
                :class="[ user_type === 'friend' ? 'selected' : '']"
                @click="update_source('friend')">Friends' Posts</button>

        </div>
        <div></div>
        <!-- <div v-if="((tweet.user_type === user_type) || (user_type === 'all'))"> -->
        <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
        <tweets
            v-for="(tweet, i) in tweet"
            v-bind:key="i+tweet"
            :tweet="tweet"
            v-if="((tweet.user_type === user_type) || (user_type === 'all'))"/>
        <!-- </div> -->

        <div v-for="(item, $index) in list" :key="$index">

            {{item}}
        </div>
        <infinite-loading
            spinner="bubbles"
            :identifier="infiniteId"
            @infinite="infiniteHandler">
            <div slot="spinner">Loading...</div>
            <div slot="error" slot-scope="{ trigger }">
                Error message, click
                <a href="javascript:;" @click="trigger">here</a>
                to retry
            </div>
        </infinite-loading>
    </div>
</template>

<script>
    import tweets from './tweets.vue';
    import InfiniteLoading from 'vue-infinite-loading';
    const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

    import axios from 'axios';
    export default {
        components: {
            tweets,
            InfiniteLoading
        },

        data() {
            return {
                user_type: 'all',
                page: 1,
                list: [],
                newsType: 'story',
                infiniteId: +new Date(),
                tweet: [],
                // tweet: [     {         id: 1,         name: 'James',         handle:
                // '@james',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                // tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr
                // lazy cat' +                 ' run fast fish critters string.',
                // user_type: 'public'     }, {         id: 2,         name: 'Jessica',
                // handle: '@jessica',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                // tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier
                // chirp toy' +                 ' ID tag slobbery smooshy.',         user_type:
                // 'public'     }, {         id: 3,         name: 'Heather',         handle:
                // '@heather',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                // tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                // user_type: 'public'     }, {         id: 4,         name: 'Arthur',
                // handle: '@arthur',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                // tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy
                // chirp Spike' +                 ' nap stick dog house throw.Tail collar leash
                // Rover meow catch Scooby snacks.',         user_type: 'friend'     }, {
                // id: 5,         name: 'Francesca',         handle: '@francesca',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                // tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl
                // scratcher w' +                 'ater dog stay cage nest slobber chirp
                // water.',         user_type: 'friend'     }, {         id: 6,         name:
                // 'Tina',         handle: '@tina',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                // tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy
                // purr. Bi' +                 'rd wag tail small animals groom vitamins
                // Tigger.',         user_type: 'friend'     },     {         id: 1,
                // name: 'James',         handle: '@james',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                // tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr
                // lazy cat' +                 ' run fast fish critters string.',
                // user_type: 'public'     }, {         id: 2,         name: 'Jessica',
                // handle: '@jessica',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                // tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier
                // chirp toy' +                 ' ID tag slobbery smooshy.',         user_type:
                // 'public'     }, {         id: 3,         name: 'Heather',         handle:
                // '@heather',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                // tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                // user_type: 'public'     }, {         id: 4,         name: 'Arthur',
                // handle: '@arthur',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                // tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy
                // chirp Spike' +                 ' nap stick dog house throw.Tail collar leash
                // Rover meow catch Scooby snacks.',         user_type: 'friend'     }, {
                // id: 5,         name: 'Francesca',         handle: '@francesca',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                // tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl
                // scratcher w' +                 'ater dog stay cage nest slobber chirp
                // water.',         user_type: 'friend'     }, {         id: 6,         name:
                // 'Tina',         handle: '@tina',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                // tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy
                // purr. Bi' +                 'rd wag tail small animals groom vitamins
                // Tigger.',         user_type: 'friend'     },     {         id: 1,
                // name: 'James',         handle: '@james',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                // tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr
                // lazy cat' +                 ' run fast fish critters string.',
                // user_type: 'public'     }, {         id: 2,         name: 'Jessica',
                // handle: '@jessica',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                // tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier
                // chirp toy' +                 ' ID tag slobbery smooshy.',         user_type:
                // 'public'     }, {         id: 3,         name: 'Heather',         handle:
                // '@heather',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                // tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                // user_type: 'public'     }, {         id: 4,         name: 'Arthur',
                // handle: '@arthur',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                // tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy
                // chirp Spike' +                 ' nap stick dog house throw.Tail collar leash
                // Rover meow catch Scooby snacks.',         user_type: 'friend'     }, {
                // id: 5,         name: 'Francesca',         handle: '@francesca',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                // tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl
                // scratcher w' +                 'ater dog stay cage nest slobber chirp
                // water.',         user_type: 'friend'     }, {         id: 6,         name:
                // 'Tina',         handle: '@tina',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                // tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy
                // purr. Bi' +                 'rd wag tail small animals groom vitamins
                // Tigger.',         user_type: 'friend'     },     {         id: 1,
                // name: 'James',         handle: '@james',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                // tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr
                // lazy cat' +                 ' run fast fish critters string.',
                // user_type: 'public'     }, {         id: 2,         name: 'Jessica',
                // handle: '@jessica',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                // tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier
                // chirp toy' +                 ' ID tag slobbery smooshy.',         user_type:
                // 'public'     }, {         id: 3,         name: 'Heather',         handle:
                // '@heather',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                // tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                // user_type: 'public'     }, {         id: 4,         name: 'Arthur',
                // handle: '@arthur',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                // tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy
                // chirp Spike' +                 ' nap stick dog house throw.Tail collar leash
                // Rover meow catch Scooby snacks.',         user_type: 'friend'     }, {
                // id: 5,         name: 'Francesca',         handle: '@francesca',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                // tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl
                // scratcher w' +                 'ater dog stay cage nest slobber chirp
                // water.',         user_type: 'friend'     }, {         id: 6,         name:
                // 'Tina',         handle: '@tina',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                // tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy
                // purr. Bi' +                 'rd wag tail small animals groom vitamins
                // Tigger.',         user_type: 'friend'     },     {         id: 1,
                // name: 'James',         handle: '@james',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                // tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr
                // lazy cat' +                 ' run fast fish critters string.',
                // user_type: 'public'     }, {         id: 2,         name: 'Jessica',
                // handle: '@jessica',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                // tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier
                // chirp toy' +                 ' ID tag slobbery smooshy.',         user_type:
                // 'public'     }, {         id: 3,         name: 'Heather',         handle:
                // '@heather',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                // tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                // user_type: 'public'     }, {         id: 4,         name: 'Arthur',
                // handle: '@arthur',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                // tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy
                // chirp Spike' +                 ' nap stick dog house throw.Tail collar leash
                // Rover meow catch Scooby snacks.',         user_type: 'friend'     }, {
                // id: 5,         name: 'Francesca',         handle: '@francesca',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                // tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl
                // scratcher w' +                 'ater dog stay cage nest slobber chirp
                // water.',         user_type: 'friend'     }, {         id: 6,         name:
                // 'Tina',         handle: '@tina',         img:
                // 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                // tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy
                // purr. Bi' +                 'rd wag tail small animals groom vitamins
                // Tigger.',         user_type: 'friend'     }, ]
            }
        },
        methods: {
            update_source: function (user_type) {
                // eslint-disable-next-line no-console console.log(user_type);
                this.user_type = user_type;
            },
            infiniteHandler($state) {
                axios
                    .get(api, {
                        params: {
                            page: this.page,
                            tags: this.newsType
                        }
                    })
                    .then(({data}) => {
                        if (data.hits.length) {
                            this.page += 1;
                            // this     .list     .push(...data.hits);
                            this
                                .tweet
                                .push(
                                    {
                                        id: 1,
                                        name: 'James',
                                        handle: '@james',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                                        tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr lazy cat' +
                                                    ' run fast fish critters string.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 2,
                                        name: 'Jessica',
                                        handle: '@jessica',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                                        tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier chirp toy' +
                                                ' ID tag slobbery smooshy.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 3,
                                        name: 'Heather',
                                        handle: '@heather',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                                        tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 4,
                                        name: 'Arthur',
                                        handle: '@arthur',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                                        tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy chirp Spike' +
                                                ' nap stick dog house throw.Tail collar leash Rover meow catch Scooby snacks.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 5,
                                        name: 'Francesca',
                                        handle: '@francesca',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                                        tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl scratcher w' +
                                                'ater dog stay cage nest slobber chirp water.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 6,
                                        name: 'Tina',
                                        handle: '@tina',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                                        tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy purr. Bi' +
                                                'rd wag tail small animals groom vitamins Tigger.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 1,
                                        name: 'James',
                                        handle: '@james',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                                        tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr lazy cat' +
                                                ' run fast fish critters string.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 2,
                                        name: 'Jessica',
                                        handle: '@jessica',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                                        tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier chirp toy' +
                                                ' ID tag slobbery smooshy.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 3,
                                        name: 'Heather',
                                        handle: '@heather',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                                        tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 4,
                                        name: 'Arthur',
                                        handle: '@arthur',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                                        tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy chirp Spike' +
                                                ' nap stick dog house throw.Tail collar leash Rover meow catch Scooby snacks.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 5,
                                        name: 'Francesca',
                                        handle: '@francesca',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                                        tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl scratcher w' +
                                                'ater dog stay cage nest slobber chirp water.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 6,
                                        name: 'Tina',
                                        handle: '@tina',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                                        tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy purr. Bi' +
                                                'rd wag tail small animals groom vitamins Tigger.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 1,
                                        name: 'James',
                                        handle: '@james',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
                                        tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr lazy cat' +
                                                ' run fast fish critters string.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 2,
                                        name: 'Jessica',
                                        handle: '@jessica',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
                                        tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier chirp toy' +
                                                ' ID tag slobbery smooshy.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 3,
                                        name: 'Heather',
                                        handle: '@heather',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
                                        tweet: 'Rover maine coon cat speak harness whiskers mouse.',
                                        user_type: 'public'
                                    },
                                    {
                                        id: 4,
                                        name: 'Arthur',
                                        handle: '@arthur',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
                                        tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy chirp Spike' +
                                                ' nap stick dog house throw.Tail collar leash Rover meow catch Scooby snacks.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 5,
                                        name: 'Francesca',
                                        handle: '@francesca',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
                                        tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl scratcher w' +
                                                'ater dog stay cage nest slobber chirp water.',
                                        user_type: 'friend'
                                    },
                                    {
                                        id: 6,
                                        name: 'Tina',
                                        handle: '@tina',
                                        img: 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
                                        tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy purr. Bi' +
                                                'rd wag tail small animals groom vitamins Tigger.',
                                        user_type: 'friend'
                                    },
                                )
                            this
                                .list
                                .unshift(...data.hits.reverse());
                            $state.loaded();
                        } else {
                           
                            $state.complete();
                              this
                                .tweet = [];
                           
                        }
                    });
            }
        }
    }
</script>

<style lang="scss" scoped="scoped"></style>