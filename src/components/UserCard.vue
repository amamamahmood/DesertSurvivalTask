<template>
    <li class="float-child" style="list-style-position: inside">
        <div class="items">
            <img class="image" :src="user.avatar" alt="user.name" width="70" heigth="70" style="width: 6vw;height:6vw;">
            <br />
            <p class="text">{{user.name}}</p>
        </div>
    </li>
</template>
<script>
   
    export default {
        components: {
        },
        props: {
            user: {
                type: Object,
                default: () => ({})
            }
        }
        
    };
</script>
<style>
    /* Unfortunately @apply cannot be setup in codesandbox,
    but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */


    text {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 10vw;
    }

    image {
    }

    items {
        align-content: center;
        align-items: center;
        text-align: center;
        width: 7vw;
        height: 9.5vw;
    }

    
    .float-child {
        width: 8.5vw;
        height: 12vw;
        float: left;
        position: relative;
        background-color: #aaa;
        border: solid;
        border-width: 2px;
        align-content: center;
        align-items: center;
        text-align: center;
        margin-left: 5px;
        margin-bottom: 5px;
    }
</style>
