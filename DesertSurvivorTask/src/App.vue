<template>
    <div id="app" >
        <div class="row">
            <div class="column" style="background-color:#bbb;">
                <ol>
                    <li class="float-child" style="list-style-position: inside" v-for="item in avatarList" :key="item.id">
                        <div class="items">
                            <img class="image" :src="item.avatar" alt="item.name" width="70" heigth="70" style="width: 6vw;height:6vw;">
                            <br />
                            <p class="text">{{item.name}}</p>
                        </div>  
                    </li>
                </ol>
                
            </div>
            <div class="column"></div>
            <div class="column" style="background-color:#aaa;">
                <draggable :list="users"
                           :animation="200"
                           ghost-class="moving-card"
                           group="users"
                           tag="ol">

                    <user-card v-for="user in users"
                               :key="user.id"
                               :user="user"
                               @upate="update"
                               @on-edit="onEdit"
                               @on-delete="onDelete"></user-card>

                </draggable>

            </div>
            <div class="column">
                <h1>Let's arrnage these items</h1>
            </div>

        </div>
        </div>

</template>

<script>
    import draggable from "vuedraggable";
    import UserCard from "./components/UserCard";
    //let list = document.getElementById("avatar_list");
    //let data2 = ["Ram", "Shyam", "Sita", "Gita"];
    //data2.forEach((item) => {
      //  let li = document.createElement("li");
        //li.innerText = item;
        //list.appendChild(li);
   // });
    export default {
        name: "App",
        components: {
            draggable,
            UserCard
        },
        data() {
            return {
                users: [
                    {
                        id: 1,
                        name: "a map of New Mexico",
                        avatar: "https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"
                    },
                    {
                        id: 2,
                        name: "The book- Edible Animals of the Desert",
                        avatar: "https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"
                    },
                    {
                        id: 3,
                        name: "duct tape",
                        avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Duct_tape_2016.jpg"
                    },
                    {
                        id: 4,
                        name: "first aid kit",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"
                    },
                    {
                        id: 5,
                        name: "cosmetic mirror",
                        avatar:
                            "https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"
                    },
                    {
                        id: 6,
                        name: "flashlight (four-battery size)",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"
                    },
                    {
                        id: 7,
                        name: "magnetic compass",
                        avatar:
                            "https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"
                    },
                    {
                        id: 8,
                        name: "vodka 2 quart flask",
                        avatar:
                            "https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"
                    },
                    {
                        id: 9,
                        name: "plastic raincoat",
                        avatar:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"
                    }
                ],
                avatarList: [
                    {
                        id: 1,
                        name: "a map of New Mexico",
                        avatar: "https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"
                    },
                    {
                        id: 2,
                        name: "The book- Edible Animals of the Desert",
                        avatar: "https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"
                    },
                    {
                        id: 3,
                        name: "duct tape",
                        avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Duct_tape_2016.jpg"
                    },
                    {
                        id: 4,
                        name: "first aid kit",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"
                    },
                    {
                        id: 5,
                        name: "cosmetic mirror",
                        avatar:
                            "https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"
                    },
                    {
                        id: 6,
                        name: "flashlight (four-battery size)",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"
                    },
                    {
                        id: 7,
                        name: "magnetic compass",
                        avatar:
                            "https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"
                    },
                    {
                        id: 8,
                        name: "vodka 2 quart flask",
                        avatar:
                            "https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"
                    },
                    {
                        id: 9,
                        name: "plastic raincoat",
                        avatar:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"
                    }
                ]
            };
        },
        methods: {
            onEdit(user) {
                alert(`Editing ${user.name}`);
            },
            onDelete(user) {
                alert(`Deleting ${user.name}`);
            },
            update() {

                alert(`Prnting ${JSON.stringify(this.users)}`);

            },
           
        }
    };
</script>

<style>
    body {
        margin-right: auto;
        margin-left: auto;
        max-width: 90%;
        max-height: 90%;
        padding-right: 10px;
        padding-left: 10px;
        align-content:center;
        align-items:center;
    }
        /* Unfortunately @apply cannot be setup in codesandbox,
    but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
        .moving-card {
            opacity: 0.5;
            background: #F7FAFC;
            border: 1px solid #4299e1;
        }
    
    .column {
        float: left;
        width: 70vw;
        height: 11vw;
        padding: 1px;
        align-content:center;

        
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }


    text {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 1.5vw;
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
        width: 7vw;
        height: 9.5vw;
        float: left;
        padding: 1px;
        margin-left: 5px;
        margin-bottom: 5px;
        border: solid;
        border-width: 2px;
        align-content: center;
        align-items: center;
        text-align: center;
    }  
</style>

