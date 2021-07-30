<template>
    <survey :survey="survey" />
</template>

<script>


    import * as Survey from "survey-vue";
    //import { store } from "./App.vue";
    import { store } from './store';


    import "survey-vue/modern.css";
    //import "./index.css";

    Survey.StylesManager.applyTheme("modern");

    export default {
        name: "surveyjs-component",
        data() {





            var json = { title: "Demographics", pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "gender", title: "What is your gender?", isRequired: true, choices: [{ value: "1", text: "Female" }, { value: "2", text: "Male" }, { value: "3", text: "Identifies as Female" }, { value: "4", text: "Identifies as Male" }, { value: "5", text: "Non-binary" }], hasOther: true }, { type: "radiogroup", name: "education", title: "What is your highest level of education completed? ", isRequired: true, choices: [{ value: "1", text: "Some high school, no diploma" }, { value: "2", text: "High school graduate, diploma or the equivalent (for example: GED)" }, { value: "3", text: "Some college, no degree" }, { value: "4", text: "Trade/technical/vocational training" }, { value: "5", text: "Bachelor's degree" }, { value: "6", text: "Advanced degree (for example: Master's, Professional, or Doctorate degree)" }] }, { type: "text", name: "field", title: "What is your current industry/discipline/major?  ", isRequired: true }] }] }

            var survey = new Survey.Model(json);
            function sendDataToServer(survey) {
                //survey.sendResult('27fc25d9-e5bb-45f8-9388-54a834bb67ce');
                //alert("The results are:" + JSON.stringify(survey.data));
                if (survey.data['gender'] == 'other') {
                    store.commit('storeGender', 4);
                }
                else {
                    store.commit('storeGender', survey.data['gender']);
                }
                var sect = document.getElementById("intro");
                //sect.style.display = "inline-block";
                sect.textContent = "Your bus has crashed in the desert of New Mexico and you have following nine items.Your task is to rank nine items in order of importance for survival.Are you ready to begin ?";
                sect = document.getElementById("surveyElement");
                sect.style.display = "none";
                var btn = document.getElementById("start");
                btn.style.display = "inline-block";
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
