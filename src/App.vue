<template>
    <div id = "app" class = "app">
        <div class="large-8 medium-8 large-offset-2 medium-offset-2 columns">
            <h2>All Blogs Here</h2>
            <div class="blogs" v-for="blog in blogs">
                <div class="panel">
                    <h4 v-rainbow>{{blog.title}}</h4>
                    <p>{{blog.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                blogs: [
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem corporis delectus dicta dignissimos dolore exercitationem fugiat illum impedit inventore, molestiae nulla perspiciatis reiciendis ut voluptates voluptatibus. Iure, natus.'
                    }
                ]
            }
        }
    }
</script>

<style lang = "scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .panel{
        background-color: #ddd;
        padding: 20px 20px 20px;
        margin-bottom: 20px;
    }
</style>
