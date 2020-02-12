<template>
    <div id="app">
        <v-app id="inspire">
            <v-card color="grey lighten-4" flat="flat" height="200px" tile="tile">
                <v-toolbar prominent="prominent" extended="extended">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Title</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon="icon">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon="icon">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon="icon">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-app id="inspire">
                    <v-tabs>
                        <v-tab>Item One</v-tab>
                        <v-tab>Item Two</v-tab>
                        <v-tab>Item Three</v-tab>
                    </v-tabs>
                </v-app>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    export default {}
</script>

<style></style>