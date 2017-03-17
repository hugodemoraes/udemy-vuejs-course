new Vue({
    el: '#exercise',
    data: {
        name: 'Hugo Cesar',
        age: 25,
        imageLink: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    methods: {
        randomFloatNumber: function() {
            return Math.random();
        }
    }
})
