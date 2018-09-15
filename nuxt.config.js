module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'test',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#2db9f0'},
    modules: [
        '@nuxtjs/apollo'
    ],
    apollo: {
        tokenName: 'authorization',
        authenticationType: 'Bearer',
        clientConfigs: {
            default: {
                httpEndpoint: 'http://localhost:3001'
            }
        },
        includeNodeModules: true
    }
}
