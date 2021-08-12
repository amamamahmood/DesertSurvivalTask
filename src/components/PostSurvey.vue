<template>
    <survey :survey="survey" />
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>


    import * as Survey from "survey-vue";
    //import { store } from "./App.vue";
    //import { store } from './store';
    import "survey-vue/modern.css";
    //import "./index.css";
    //const { v4: uuidv4 } = require('uuid');
    //var url = 'https://script.google.com/macros/s/AKfycby4CgcVBKI471bkIYxrKr6GEY35345TXDlnWrH6-KyXhcZ7St9sAyLKbHumTPQXaME9cQ/exec';
    Survey.StylesManager.applyTheme("modern");

    export default {
        name: "post-survey",
        data() {


            var surveyJSON = { title: "Post-Study Questionnaire", description: "Based on your interaction with the agent, please fill the following questionnaire", pages: [{ name: "Questions1", elements: [{ type: "matrix", name: "dominance", maxWidth: "", title: "Rate following ", hideNumber: true, isRequired: true, columns: [{ value: "1", text: "Strongly disagree" }, { value: "2", text: "  " }, { value: "3", text: "  " }, { value: "4", text: "  Neutral" }, { value: "5", text: "  " }, { value: "6", text: "  " }, { value: "7", text: "Strongly agree" }], rows: [{ value: "1", text: "Agent rarely influenced me" }, { value: "2", text: "Agent often stopped to think about what to say next  " }, { value: "3", text: "I was influenced by the agent" }, { value: "4", text: "The agent would win any argument that may occur in our conversations" }, { value: "5", text: "The agent acted nervous in the discussion" }, { value: "6", text: "The agent was very expressive during the discussion" }, { value: "7", text: "The agent was relaxed and at ease during the discussion" }, { value: "8", text: "The agent often had trouble thinking of things to talk about" }, { value: "9", text: "The agent was not very smooth verbally" }, { value: "10", text: "The agent was usually successful in persuading me to change my ranking" }], isAllRowRequired: true }], title: "Post-Study Questionnaire" }, { name: "Questions2", elements: [{ type: "rating", name: "like", minWidth: "300 px", maxWidth: "", indent: -1, title: "Agent: ", description: "1 = strongly disagree to 4 = neutral to  7 = strongly agree", hideNumber: true, isRequired: true, rateMax: 8, minRateDescription: "Is like me", maxRateDescription: "Is unlike me" }, { type: "rating", name: "different", indent: 1, titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Is different from me", maxRateDescription: "Is similar to me" }, { type: "rating", name: "think", minWidth: "300 px", maxWidth: "", indent: -1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Thinks like me", maxRateDescription: "Does not think like me" }, { type: "rating", name: "behave", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Does not behave like me", maxRateDescription: "Behaves like me" }, { type: "rating", name: "status", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Has status like me", maxRateDescription: "Has status different from me" }, { type: "rating", name: "question3", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Is from a different social class", maxRateDescription: "Is from same social class" }, { type: "rating", name: "culture", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Is culturally different", maxRateDescription: "Is culturally same" }, { type: "rating", name: "economic", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Has economic situation like me", maxRateDescription: "Does not have economic situation like me" }, { type: "rating", name: "fake", minWidth: "300 px", maxWidth: "", indent: -1, title: "Please rate your impression of the agent on these scales", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Fake", maxRateDescription: "Natural" }, { type: "rating", name: "humanlike", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Machinelike", maxRateDescription: "Humanlike" }, { type: "rating", name: "concious", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Unconcious", maxRateDescription: "Concious" }, { type: "rating", name: "lifelike", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Artificial", maxRateDescription: "Lifelike" }, { type: "rating", name: "responsive", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Apathetic", maxRateDescription: "Responsive" }, { type: "rating", name: "dislike", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Dislike", maxRateDescription: "Like" }, { type: "rating", name: "friendly", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Unfriendly", maxRateDescription: "Friendly" }, { type: "rating", name: "kind", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Unkind", maxRateDescription: "Kind" }, { type: "rating", name: "pleasant", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Unpleasant", maxRateDescription: "Pleasant" }, { type: "rating", name: "nice", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Awful", maxRateDescription: "Nice" }, { type: "rating", name: "competent", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Incompetent", maxRateDescription: "Competent" }, { type: "rating", name: "knowledgeable", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Ignorant", maxRateDescription: "Knowledgeable" }, { type: "rating", name: "intelligent", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Foolish", maxRateDescription: "Intelligent" }, { type: "rating", name: "helpful", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Unhelpful", maxRateDescription: "helpful" }, { type: "rating", name: "relevant", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Irrelevant", maxRateDescription: "Relevant" }, { type: "rating", name: "persuasive", minWidth: "300 px", maxWidth: "", indent: 1, title: "Agent is: ", titleLocation: "hidden", hideNumber: true, isRequired: true, rateMax: 7, minRateDescription: "Dissuasive", maxRateDescription: "Persuasive" }] }], showPrevButton: false, showPageTitles: false, showQuestionNumbers: "off", questionErrorLocation: "bottom" }


            //var surveyJSON = { surveyId: 'b74486b1-b513-4f36-bd8e-c6afdf7b312a', surveyPostId: 'fe30052a-417d-4dd7-9638-f65dc25d30dc' };
            var survey = new Survey.Model(surveyJSON);
            function sendDataToServer(survey) {
                var sect = document.getElementById("intro");
                sect.style.display = "inline-block";
                sect.textContent = "Thank you for submitting the survey";
                sect = document.getElementById("surveyElement");
                sect.style.display = "none";
                alert(JSON.stringify(survey.data));


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
