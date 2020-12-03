<template>
    <div :id="rootId" class="question" :class="{'answered': answered}">
        <div class="number-block" v-if="question.numberFile" >
            <div class="line">
                <div class="current-number">{{number}}&#47;{{totalCount}}</div>
            </div>
            <div class="number"><img :src="question.numberFile" alt=""></div>
            <div class="line"></div>
        </div>
        <div class="question-text">{{question.question}}</div>
        <div class="answers">
            <div class="answer" v-for="(answer, answerKey) in question.answers" :key="answerKey">
                <input :type='question.answerType'
                    :key='answerKey'
                    :name='getAnswerName()'
                    v-model='userAnswer'
                    :value='answer'
                    :id="getAnswerId(answerKey)"
                    @change.prevent="sendUserData($event)"
                    :disabled="answered"
                >
                <label :for="getAnswerId(answerKey)"><div class="answer-text">{{answer}}</div></label>
            </div>
        </div>
        <div v-if="question.userAnswer.length" class="question-result">
            <div class="result-title" v-if="isCorrectAnswer()">Правильный ответ</div>
            <div class="result-title" v-else>Неправильный ответ</div>
            <div class="result-text" v-if="isCorrectAnswer() && question.correctText">{{question.correctText}}</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Question",
		props: ['question', 'number', 'totalCount','bus'],
		data() {
			return {
                userAnswer: [],
                answered: false
			}
		},
		computed: {
            rootId: function(){
                return 'question-' + this.number;
            }
        },
		methods: {
			sendUserData() {
                console.log('sendUserData', this.userAnswer);
                if(this.answered === false) {
                    this.$emit('answer', {answer: this.userAnswer});
                    this.answered = true;
                }
			},
			isCorrectAnswer() {
				if(Array.isArray(this.question.userAnswer)) {
					return this.question.correctAnswer.join() == this.question.userAnswer.join();
				} else {
					return this.question.correctAnswer.indexOf(this.question.userAnswer) !== -1;
				}
            },
            getAnswerId(answerId) {
                return 'answer-' + this.number + '-' + answerId;
            },
            getAnswerName() {
                return 'answer-' + this.number;
            },
            restart() {
                this.userAnswer = [];
                this.answered = false;
            }
		},
		updated() {
        },
        mounted() {
            this.bus.$on('restart', this.restart)
        }, 
	}
</script>


<style scoped>
    .question {
        padding-bottom: 170px;
    }
    .question.answered {
        padding-bottom: 100px;
    }
    .number-block {
        display: flex;
        align-items: center;
    }
    .number-block .line {
        flex: 0 1 475px;
        height: 1px;
        box-sizing: border-box;
        border-top: 1px dashed #D8B674;
        position: relative;
    }
    .current-number {
        font-family: Intro, Roboto, sans-serif ;
        font-style: normal;
        font-weight: normal;
        font-size: 1.125rem;
        line-height: 1;
        text-align: right;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #D8B674;
        position: absolute;
        top: 1.75rem;
        left: 0;
        right: 0;
    }
    .number {
        flex: 0 0 auto;
        margin: 0 auto;
    }
    .number img {
        height: 5.625rem;
    }
    .question-text {
        font-family: Intro, Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.375rem;
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        max-width: 900px;
        margin: 4vh auto;
    }
    .answers {
        display: inline-block;
        text-align: left;
    }
    .answer {
        margin-bottom: 4vh;
    }
    .answer input {
        display: none;
    }
    .answer label {
        padding-left: 2.75rem;
        display: flex;
        position: relative;
        cursor: pointer;
    }
    .answer input:disabled + label {
        cursor: not-allowed;
    }
    .answer label::before {
        position: absolute;
        top: 0;
        left: 0;
        display: inline;
        width: 1.8125rem;
        height: 1.8125rem;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29 6.44444L6.44444 29L29 51.5556L51.5556 29L29 6.44444ZM1.61111 27.3889L29 0L58 29L29 58L0 29L1.61111 27.3889Z' fill='%23D8B674'/%3E%3C/svg%3E%0A");
        background-size: 100%;
    }
    .answer input:checked + label::before {
        background-image: url("data:image/svg+xml,%3Csvg width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29 6.44444L6.44444 29L29 51.5556L51.5556 29L29 6.44444ZM16.1111 29L29 16.1111L41.8889 29L29 41.8889L16.1111 29ZM1.61111 27.3889L29 0L58 29L29 58L0 29L1.61111 27.3889Z' fill='%23D8B674'/%3E%3C/svg%3E%0A");
    }
    .answer-text {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 1.375rem;
        line-height: 1.16667;
        color: #FFFFFF;
    }
    .question-result {
        margin-top: 20px;
    }
    .result-title {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 0.9375rem;
        line-height: 1.16667;
        text-align: center;
        text-transform: uppercase;
        color: #D8B674;
    }
    .result-text {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.16667;
        text-align: center;
        color: #D8B674;
        max-width: 700px;
        margin: 30px auto;
    }
    @media screen and (max-width: 767px) {
        .number {
            margin: 0 15px;
        }
    }
</style>