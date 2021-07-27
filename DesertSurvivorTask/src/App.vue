<template>
    <div id="app">
        <div class="row">

            <div id="avatarRating" class="column" style="background-color:#bbb; display:none">
                <h3>Avatar's Rankings</h3>
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
                <h1 id="heading"> Desert Survival Task </h1>
                <h2 id="intro" class="text">
                    Your bus has
                    crashed in the desert of New Mexico and you have following nine items. Your task is to rank nine items in order
                    of importance for survival. Are you ready to begin?
                </h2>
                <br />
                <button id="start" class="button" style="display:inline-block" v-on:click="startInitialRanking">See the items</button>
                <br />



            </div>
            <div id="avatar" class="column3">
                
                <br />
            </div>
            <div class="column3">

                <h1 id="drag_inst" style="display:none;">The agent tries to convince the participant about next item</h1>
                <br />
                <h2 id="intro2" class="text" style="display:none;">
                </h2>
                <br />
                <button id="drag" class="button" style="display:none" width="100px" v-on:click="makeDraggable">Update your ranking</button>
                &emsp;&emsp;&emsp;&emsp;
                <button id="noDrag" class="button" style="display:none" width="100px" v-on:click="skipUpdating">Continue without updating</button>
                <br />
                <button id="begin" class="button" style="display:none;" v-on:click="doneInitialRanking">Done Ranking? Continue</button>
                <br />
                <button id="interact" class="button" style="display:none;" v-on:click="beginInteraction">Start Interaction</button>
                <br />
                <button id="done_drag" class="button" style="display:none;" v-on:click="doneDragging">Done Updating? Continue</button>
                <br />
                <button id="submit" class="button" style="display:none" v-on:click="submitRankings">Submit Final Rankings</button>

            </div>
            <div id="user_list" class="column2" style="background-color:#aaa; display:none;">
                <h3 class="text">Your Rankings</h3>

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
    //import { modelFbx } from 'vue-3d-model'
    import * as THREE from 'three';

    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
    import Stats from 'three/examples/jsm/libs/stats.module';
    //let list = document.getElementById("avatar_list");
    //let data2 = ["Ram", "Shyam", "Sita", "Gita"];
    //data2.forEach((item) => {
    //  let li = document.createElement("li");
    //li.innerText = item;
    //list.appendChild(li);
    // });
    let counter = 0; // which item on its list will the agent talk about
    var item_order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var avatar_order = [4, 5, 0, 1, 2, 7, 3, 8, 6];
    let camera, scene, renderer, stats;




    const clock = new THREE.Clock();

    let mixer;
    //var PulseLoader = VueSpinner.PulseLoader
    //init();
    //animate();

    function init(avatarState) {

        var container = document.createElement('div');
        //var avatar = document.getElementById('avatar');
        container.classList.add("columnAvatar");
        container.id = "avatardiv";
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 2000);
        camera.position.set(50, 150, 250);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 200, 1000);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 200, 0);
        scene.add(hemiLight);

        const lights = new THREE.DirectionalLight(0xffffff, 1, 0);
        lights.position.set(50, 100, 200);
        scene.add(lights);

        const dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(0, 200, 100);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 180;
        dirLight.shadow.camera.bottom = - 100;
        dirLight.shadow.camera.left = - 120;
        dirLight.shadow.camera.right = 120;
        scene.add(dirLight);

        // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

        // ground
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        //scene.add(grid);

        // model
        var fileLoad;
        const loader = new FBXLoader();
        if (avatarState == "talking") {
            fileLoad = 'david_talking.fbx';
        }
        else if (avatarState == "idle") {
            fileLoad = 'david_idle.fbx';
        }
        loader.load(fileLoad, function (object) {

            mixer = new THREE.AnimationMixer(object);

            const action = mixer.clipAction(object.animations[0]);
            action.play();

            object.traverse(function (child) {

                if (child.isMesh) {

                    child.castShadow = true;
                    child.receiveShadow = true;

                }

            });

            scene.add(object);

        });

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.setClearColor(0xffffff, 0);
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 100, 0);
        controls.update();

        window.addEventListener('resize', onWindowResize);

        // stats
        stats = new Stats();
        container.appendChild(stats.dom);

    }

    function onWindowResize() {
        var container = document.getElementById("avatardiv")
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(container.clientWidth, container.clientHeight);

    }

    //
    //var animationAvatar;
    function animate() {

        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        if (mixer) mixer.update(delta);

        renderer.render(scene, camera);

        stats.update();

    }
    //var doneSpeaking = false;
    var synth = window.speechSynthesis;
    var voiceList = window.speechSynthesis.getVoices;
   
    function greet(greetingSpeech, selectedVoice) {
        //speechSynthesis.cancel();
        

        greetingSpeech.voice = voiceList[selectedVoice];
        //doneSpeaking = false;
        synth.speak(greetingSpeech);
        
        
        //greetingSpeech.onend = function () {
          //  return true;
        //}
    }
    
    export default {
        name: "App",
        components: {
            draggable,
            UserCard
            //modelFbx
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
            
            random_userList: function () {
                item_order.sort(() => Math.random() - 0.5);
                this.users = item_order.map(i => this.users[i]);
                //alert(JSON.stringify(this.users));
            },
            reorder_avatarList: function () {
                this.avatarList = avatar_order.map(i => this.users[i]);
                //alert(JSON.stringify(this.avatarList));

            },
            compare_lists: function () {
                //alert(JSON.stringify(this.users[counter]))
                if (this.users[counter].id == this.avatarList[counter].id) {
                    alert("Moving on to next item for persuation since this one already matches. Say something like: Glad we agree on nth item on our list");
                    counter += 1;

                    return true;
                }
                return false;
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
            startInitialRanking: function (event) {
                this.enable();
                this.random_userList();
                var sect = document.getElementById("user_list");
                sect.style.display = "block";
                event.target.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block";
                inst.textContent = "Drag and drop the items to order the list";
                sect = document.getElementById("begin");
                sect.style.display = "inline-block";
            },
            doneInitialRanking: function (event) {
                this.disable();
                event.target.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.style.display = "none";
                var sect = document.getElementById("intro2");
                sect.style.display = "inline-block";
                sect.textContent = "After this initial ranking. Now you'll have a chance to see rankings of a Virtual AI agent. The agent will present you with his reasoning for picking each item in specific order. You will have a choice to update your ranking during the interaction";
                var btn = document.getElementById("interact");
                btn.style.display = "inline-block";

            },
            beginInteraction: function (event) {
                //var temp = document.getElementById("temp");
                //temp.style.display = "none";
                this.reorder_avatarList();
                event.target.style.display = "none";
                var sect = document.getElementById("intro");
                sect.style.display = "none";
                sect = document.getElementById("intro2");
                sect.style.display = "none";
                sect = document.getElementById("heading");
                sect.style.display = "none";
                sect = document.getElementById("avatarRating");
                sect.style.display = "block";
                init("talking");
                animate();
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block";
                inst.textContent = "The agent tries to convince the participant of first item on its list";
                
                
                var selectVoice = 0;
                setTimeout(function () {
                    const greetingSpeech = new window.SpeechSynthesisUtterance();
                    greetingSpeech.text = "Hi. I am David. Here is my list. I'll try to convince you of my first item on its list";
                    greet(greetingSpeech, selectVoice);
                    greetingSpeech.addEventListener('end', function () {
                        var btn = document.getElementById("drag");
                        btn.style.display = "inline-block";
                        btn = document.getElementById("noDrag");
                        btn.style.display = "inline-block";
                        init("idle");
                        animate();
                    });
                    
                }, 2000);
                
                
                
                
                
            },
            makeDraggable: function (event) {
                //alert("I am here");
                //alert(event.target.tagName);
                //var avatar = document.getElementById("avatardiv");
                //init("idle");
                //animate();
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block"
                inst.textContent = "Update your list by dragging and dropping the items";
                //this.draggable = true;
                //var btn = document.getElementByID("drag");
                event.target.style.display = "none";
                var btn = document.getElementById("noDrag");
                btn.style.display = "none";
                //list.draggable = "true";
                //this.disabled = false;

                //var check1 = document.getElementById("check1");
                //check1.style.display = "inline-block";
                // var check2 = document.getElementById("label_check");
                //check2.style.display = "inline-block";
                this.enable();
                //event.style.display = "none";
                btn = document.getElementById("done_drag");
                btn.style.display = "inline-block";
            },
            skipUpdating: function (event) {
                event.target.style.display = "none";
                var btn = document.getElementById("drag");
                btn.style.display = "none";
                this.doneDragging();
            },
            doneDragging: function () {
                init("talking");
                animate();
                var btn = document.getElementById("done_drag");
                btn.style.display = "none";
                counter += 1;
                var inst;
                //alert(counter + 1);
                if (counter >= 9) {
                    this.enable();
                    inst = document.getElementById("drag_inst");
                    inst.textContent = "Please finalize and submit your rankings before concluding the study";
                    btn = document.getElementById("submit");
                    btn.style.display = "inline-block";
                }
                else {
                    inst = document.getElementById("drag_inst");
                    this.disable();
                    var checking = this.compare_lists();
                    while (checking && counter < 9) {
                        checking = this.compare_lists();
                    }
                    if (counter < 9) {
                        inst.textContent = "The agent tries to convince the participant about item " + JSON.stringify(counter + 1);
                        btn = document.getElementById("drag");
                        btn.style.display = "inline-block";
                        btn = document.getElementById("noDrag");
                        btn.style.display = "inline-block";
                    }
                    else {
                        this.enable();
                        inst = document.getElementById("drag_inst");
                        inst.textContent = "Please finalize and submit your rankings before concluding the study";
                        btn = document.getElementById("submit");
                        btn.style.display = "inline-block";
                    }


                }



            },
            submitRankings: function (event) {
                event.target.style.display = "none";
                this.disable();
                var inst = document.getElementById("drag_inst");
                inst.textContent = "Thank you for taking the time to complete the study. Please proceed to post-study questionnaires";
            }

        }
    };
</script>


<style>
    body {
        margin-right: 15vw;
        margin-left: 15vw;
        max-width: 100%;
        max-height: 100%;
        padding-right: 10px;
        padding-left: 10px;
        align-content: center;
        align-items: center;
        text-align: center;
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
        bottom: 20px;
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
        top: 20px;
    }
    .columnAvatar {
        float: right;
        width: 20vw;
        height: 20vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 14vw;
        right: 10vw;
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
        font-size: 40px;
        max-width: 80%;
    }


    button {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 20px;
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

