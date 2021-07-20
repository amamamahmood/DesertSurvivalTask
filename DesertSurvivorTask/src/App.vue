<template>
    <div id="app" >
        <div class="row">

            <div class="column" style="background-color:#bbb;">
                <h3>Avatar's rating</h3>
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
            <div class="column3">
            </div>
            <div class="column3">
                
                
            </div>
            <div class="column3">
                <button id="drag" class="button" v-on:click="makeDraggable">Update your ratings</button>
                <br />
                <h1 id="drag_inst" style="display:inline-block;">The agent tries to convince the participant about next item</h1>
                <br />
                
                <br />


                <button id="done_drag" class="button" style="display:none;" v-on:click="doneDragging">Updated! Continue</button>
            </div>
            <div class="column2" style="background-color:#aaa;">
                <h3 class="text">Your ratings</h3>

                <draggable id="items_list" 
                           :list="users"
                           :animation="200"
                           :disabled="!enabled"
                           ghost-class="moving-card"
                           group="users"
                           tag="ol"
                            @start="dragging = true"
                            @end="dragging = false">


                    <user-card v-for="user in users"
                               :key="user.id"
                               :user="user"
                               @upate="update"
                               @on-edit="onEdit"
                               @on-delete="onDelete"></user-card>

                </draggable>

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
    let counter = 0; // which item on its list will the agent talk about
    var item_order = [8, 7, 6, 5, 4, 3, 2, 1];
    export default {
        name: "App",
        components: {
            draggable,
            UserCard
        },
        data() {
            return {
                enabled: false,
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
            reorder_avatarList: function () {
                this.avatarList = item_order.map(i => this.avatarList[i]);
                alert(JSON.stringify(this.avatarList));
                
            },
            compare_lists: function () {
                alert(JSON.stringify(this.users[counter]))
                if (this.users[counter].id == this.avatarList[counter].id) {
                    alert("Moving on to next item for persuation since this one already matches. Say something like: Glad we agree on nth item on our list");
                    counter += 1;
                }
            },
            disable() {
                this.enabled = false;
            },
            enable() {
                this.enabled = true;
            },
            onEdit(user) {
                alert(`Editing ${user.name}`);
            },
            onDelete(user) {
                alert(`Deleting ${user.name}`);
            },
            update() {

                alert(`Prnting ${JSON.stringify(this.users)}`);

            },
            makeDraggable: function (event) {
                this.reorder_avatarList();
                //alert("I am here");
                //alert(event.target.tagName);
                var inst = document.getElementById("drag_inst");
                inst.textContent = "Update your list by dragging and dropping the items";
                //this.draggable = true;
                //var btn = document.getElementByID("drag");
                event.target.style.display = "none";
                //list.draggable = "true";
                //this.disabled = false;
                
                //var check1 = document.getElementById("check1");
                //check1.style.display = "inline-block";
               // var check2 = document.getElementById("label_check");
                //check2.style.display = "inline-block";
                this.enable();
                //event.style.display = "none";
                var btn = document.getElementById("done_drag");
                btn.style.display = "inline-block";
            },
            doneDragging: function (event) {
                event.target.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.textContent = "The agent tries to convince the participant about next item";
                var btn = document.getElementById("drag");
                btn.style.display = "inline-block";
                //var check1 = document.getElementById("check1");
                //check1.style.display = "none";
                //var check2 = document.getElementById("label_check");
                //check2.style.display = "none";
                this.disable();
                counter += 1;
                alert(counter+1);
                this.compare_lists();
                
                 
            }
           
        }
    };
</script>

<style>
    body {
        margin-right: 20px;
        margin-left: 20px;
        max-width: 100%;
        max-height: 100%;
        padding-right: 10px;
        padding-left: 10px;
        align-content:center;
        align-items:center;
        text-align:center;
    }
        /* Unfortunately @apply cannot be setup in codesandbox,
    but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
        .moving-card {
            opacity: 0.5;
            background: #F7FAFC;
            border: 1px solid #4299e1;
        }
    
    .column2 {
        float: left;
        width: 70vw;
        height: 12.5vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        bottom: 5px;
    }
    .column {
        float: left;
        width: 70vw;
        height: 12.5vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 5px;
    }
    .column3 {
        float: left;
        width: 70vw;
        height: 12.5vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
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
        font-size: 20px;
    }


    button {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 40px;
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

