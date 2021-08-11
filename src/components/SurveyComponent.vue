<template>
    <survey :survey="survey" />
</template>
<head>

</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>


    import * as Survey from "survey-vue";
    //import { store } from "./App.vue";
    import { store } from './store';
    import "survey-vue/modern.css";
    //import "./index.css";
    const { v4: uuidv4 } = require('uuid');
    var url = 'https://script.google.com/macros/s/AKfycby4CgcVBKI471bkIYxrKr6GEY35345TXDlnWrH6-KyXhcZ7St9sAyLKbHumTPQXaME9cQ/exec';
    Survey.StylesManager.applyTheme("modern");

    export default {
        name: "surveyjs-component",
        data() {
            




            var json = { title: "Demographics", pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "gender", title: "What is your gender?", isRequired: true, choices: [{ value: "1", text: "Female" }, { value: "2", text: "Male" }, { value: "3", text: "Non-binary" }], hasOther: true }, { type: "radiogroup", name: "education", title: "What is your highest level of education completed? ", isRequired: true, choices: [{ value: "1", text: "Some high school, no diploma" }, { value: "2", text: "High school graduate, diploma or the equivalent (for example: GED)" }, { value: "3", text: "Some college, no degree" }, { value: "4", text: "Trade/technical/vocational training" }, { value: "5", text: "Bachelor's degree" }, { value: "6", text: "Advanced degree (for example: Master's, Professional, or Doctorate degree)" }] }, { type: "text", name: "major", title: "What is your current industry/discipline/major?  ", isRequired: true }] }] }
            var survey = new Survey.Model(json);
            function sendDataToServer(survey) {
                var u_id = uuidv4();
                store.commit('storeUid', u_id);
                var user_data = {
                    "uid": u_id,
                    "gender" : survey.data['gender'],
                    "education" : survey.data['education'],
                    "major" : survey.data['major']
                };
                
                //survey.data["uid"] = u_id;
                if (survey.data['gender'] == 'other') {
                    store.commit('storeGender', 4);
                }
                else {
                    store.commit('storeGender', survey.data['gender']);
                }
                var sect = document.getElementById("intro");
                sect.style.display = "inline-block";
                sect.textContent = "Continue to see the description of the task";
                sect = document.getElementById("surveyElement");
                sect.style.display = "none";
                sect = document.getElementById("heading");
                sect.style.display = "block";
                var btn = document.getElementById("home");
                btn.style.display = "inline-block";
                //    survey.sendResult('27fc25d9-e5bb-45f8-9388-54a834bb67ce');
                //alert("The results are:" + JSON.stringify(survey.data));

                alert(JSON.stringify(user_data));
                $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: user_data //$form.serializeObject()
                });
                //alert(jqxhr);

                //alert("modified gender: " + store.getters.getGender);

            }

            survey.onComplete.add(sendDataToServer);




            return {
                survey: survey
            };
        }
    };
</script>

<style scoped>
</style>
