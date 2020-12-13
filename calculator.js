
const app = Vue.createApp({
    data() {

        return {

            number: "",
            prevNum: null,
            operator: null,
            operatorClicked: false

        }

    },

    methods: {

        dot() {
            if (this.number.indexOf('.') === -1) {
                this.append(".");
            }
        },
        
        clearAll() {
            this.number = "";

        },


        append(num) {
            if (this.operatorClicked) {
                this.number = '',
                    this.operatorClicked = false


            }
            this.number += num;
        },

        addition() {
            this.operator = (a, b) => a + b;
            this.setPrevNum();
        },
        multiplication() {
            this.operator = (a, b) => a * b;
            this.setPrevNum();
        },

        substraction() {
            this.operator = (a, b) => a - b;
            this.setPrevNum();
        },
        divition() {
            this.operator = (a, b) => a / b;
            this.setPrevNum();
        },
        setPrevNum() {
            this.prevNum = this.number;
            this.operatorClicked = true;

        },

        equal() {
            this.number = `${this.operator(parseFloat(this.prevNum), parseFloat(this.number))}`;
            
            this.prevNum = "";
        }





    }


})










app.mount("#app");