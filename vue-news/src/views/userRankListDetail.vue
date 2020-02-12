<template>
<v-app id="inspire">
    <v-card>
        <v-card-title>
            유저 정보 검색하기
            <v-spacer></v-spacer>
           
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                @click = "UserInfo"
                
                single-line="single-line"
                hide-details="hide-details"></v-text-field>
        </v-card-title>
        
        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
        
    </v-card>
</v-app>
</template>

<script>
    export default {
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: '순위',
                        align: 'left',
                      //  sortable: false,
                        value: 'rank'
                    }, {
                        text: '이름',
                        sortable : false,
                        value: 'name'
                    }
                    // }, {
                    //     text: 'Fat (g)',
                    //     value: 'fat'
                    // }, {
                    //     text: 'Carbs (g)',
                    //     value: 'carbs'
                    // }, {
                    //     text: 'Protein (g)',
                    //     value: 'protein'
                    // }, {
                    //     text: 'Iron (%)',
                    //     value: 'iron'
                    // }
                ],
                desserts: [
                    {
                        rank: 1,
                        name: "인구",
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%'
                    }, {
                        rank: 2,
                        name: '민식이형님',
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%'
                    }, {
                        rank: 3,
                        name: '수영이',
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%'
                     },// {
                    //     name: 'Cupcake',
                    //     calories: 305,
                    //     fat: 3.7,
                    //     carbs: 67,
                    //     protein: 4.3,
                    //     iron: '8%'
                    // }
                    // }, {
                    //     name: 'Gingerbread',
                    //     calories: 356,
                    //     fat: 16.0,
                    //     carbs: 49,
                    //     protein: 3.9,
                    //     iron: '16%'
                    // }, {
                    //     name: 'Jelly bean',
                    //     calories: 375,
                    //     fat: 0.0,
                    //     carbs: 94,
                    //     protein: 0.0,
                    //     iron: '0%'
                    // }, {
                    //     name: 'Lollipop',
                    //     calories: 392,
                    //     fat: 0.2,
                    //     carbs: 98,
                    //     protein: 0,
                    //     iron: '2%'
                    // }, {
                    //     name: 'Honeycomb',
                    //     calories: 408,
                    //     fat: 3.2,
                    //     carbs: 87,
                    //     protein: 6.5,
                    //     iron: '45%'
                    // }, {
                    //     name: 'Donut',
                    //     calories: 452,
                    //     fat: 25.0,
                    //     carbs: 51,
                    //     protein: 4.9,
                    //     iron: '22%'
                    // }, {
                    //     name: 'KitKat',
                    //     calories: 518,
                    //     fat: 26.0,
                    //     carbs: 65,
                    //     protein: 7,
                    //     iron: '6%'
                    // }
                ]
            }
        },
        methods : {
            UserInfo(){
                console.log('click')
            }
        }
    }
</script>

<style scoped>
#inspire{
    position : relative;
    top : 10px;
    right : 350px;
    
}
.v-card.v-sheet.theme--light {
    height: 80%;
}
</style>