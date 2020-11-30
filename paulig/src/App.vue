<template>
  <div id="app">
	<div class="container">
		<StartScreen @start="goToQuiz"/>
		<div class="questions" v-if="state != 'start'">
			<Question
				v-for="(question, index) in questions"
				v-show="index <= stage"
				:key="index"
				:number="index + 1"
				:question="question"
				:totalCount="questions.length"
				:bus="bus"
				@answer="getAnswer"
			/>
		</div>
		<FinalScreen v-if='state == "results"'
			:result='testResult'
			@restart='restart'
		/>
	</div>
  </div>
</template>

<script>
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import FinalScreen from "./components/FinalScreen"
import Vue from 'vue';

//Vue.use(VueSmoothScroll);

export default {
	name: 'App',
	components: {
		StartScreen, Question, FinalScreen
	},
	data () {
		return {
			questions: [],
			resultTexts: [],
			stage: 0,
			state: 'start',
			title: '',
			timeout: null,
			bus: new Vue(),
		}
	},
  
	methods: {
		goToQuiz() {
			this.state = 'quiz';
			this.stage = 0;
			setTimeout(this.scrollToQuestion,100);
			window.sendGA('click_begin');
		},
		scrollToQuestion(number = this.stage + 1) {
			const element = document.getElementById('question-' + number);
			console.log(number,element);
			if(element) {
				this.$smoothScroll({
					scrollTo: element,
					duration: 800,
					updateHistory: false,
					easingFunction: 'linear'
				});
			}
		},
		scrollToFinish() {
			const element = document.querySelector('.final-screen');
			if(element) {
				this.$smoothScroll({
					scrollTo: element,
					duration: 800,
					updateHistory: false,
					easingFunction: 'linear'
				});
			}
		},
		getAnswer(data) {
			let object = this.questions[this.stage];
			window.sendGA('quest_' + (this.stage+1));
			if (Array.isArray(data.answer)) {
				object.userAnswer = data.answer
			} else {
				object.userAnswer.push(data.answer);
			}
			object.userAnswer.sort();
			object.correctAnswer.sort();
			this.next();
		},
		next() {
			if (this.stage == this.questions.length-1) {
				this.state = 'results';
				setTimeout(this.scrollToFinish, 2000);
			} else {
				let timeout = this.questions[this.stage].correctText ? 2000 : 1000;
				this.stage++;
				setTimeout(this.scrollToQuestion, timeout);
			}
		},
		restart() {
			this.scrollToQuestion(1);
			window.sendGA('click_again');
			this.stage = 0;
			this.state = 'quiz';
			this.questions.forEach((item) => {
				item.userAnswer.length = 0;
			});
			this.bus.$emit('restart');
		},
		checkAnswer(question) {
			if(Array.isArray(question.userAnswer)) {
				return question.correctAnswer.join() == question.userAnswer.join();
			} else {
				return question.correctAnswer.indexOf(question.userAnswer) !== -1;
			}
		}
	},
	
	computed: {
		currentQuestion: function() {
			return this.questions[this.stage] || {};
		},
		isMobile: function() {
			const isMobileVar = {
				Android: function () {
						return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function () {
						return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function () {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function () {
						return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function () {
						return navigator.userAgent.match(/IEMobile/i);
				},
				any: function () {
						return (isMobileVar.Android() || isMobileVar.BlackBerry() || isMobileVar.iOS() || isMobileVar.Opera() || isMobileVar.Windows());
				}
			};
			return isMobileVar.any();
		},
		correctAnswersCount: function() {
			return this.questions.filter(this.checkAnswer).length;
		},
		testResult: function() {
			return this.resultTexts.filter((v) => v.from <= this.correctAnswersCount && this.correctAnswersCount <= v.to)[0];
		}
	},
	
	created: function () {
		const testData = window.testData;
		if(typeof testData !== 'undefined') {
			if(Array.isArray(testData.questions) && testData.questions.length) {
				this.questions = testData.questions;
			}
			if(Array.isArray(testData.resultTexts) && testData.resultTexts.length) {
				this.resultTexts = testData.resultTexts;
			}
		}
	}
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 55px;
  overflow: hidden;
}
@media screen and (max-width: 767px) {
	#app {
		padding: 0 20px;
	}
}
@media screen and (min-width: 768px) {
	#app {
		padding: 0 50px;
	}
}
.container {
  width: 1240px;
  margin: 0 auto;
  max-width: 100%;
  text-align: center;
}
.btn {
  background: #890422;
  border-radius: 12px;
  font-family: Intro, Roboto, sans-serif;;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  color: #D8B674;
  margin: 0 auto;
  display: block;
  width: 163px;
  height: 45px;
  border: none;
  outline: 0;
  line-height: 45px;
  cursor: pointer;
}
</style>
