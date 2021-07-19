<template>
    <li class="float-child">
        <div class="items">
            <br />
            <img class="image" :src="user.avatar" alt="user.name" width="70" heigth="70" style="width: 70px;height:70px;">
            <br />
            <p class="text">{{user.name}}</p>
        </div>
    </li>
</template>
<script>
    import { EditIcon, Trash2Icon } from "vue-feather-icons";
    export default {
        components: {
            EditIcon,
            Trash2Icon
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
        font-size: 20px;
        
    }

    image {
        width: 100px;
        height: 100px;
        
        
    }
    items {
        align-content: center;
        align-items: center;
        text-align: center;
    }
    .float-child {
        width: 100px;
        height: 150px;
        float: left;
        padding: 5px;
        margin-left: 5px;
        margin-bottom:5px;
        align-content: center;
        align-items: center;
        text-align: center;
    }  
</style>
