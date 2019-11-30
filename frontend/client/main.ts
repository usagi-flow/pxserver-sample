import "./styles.scss";

import Vue from "vue";

let app : Vue = new Vue({
	el: "#app",
	data: {
		message: "Hello from Vue on " + new Date().toLocaleDateString()
	}
});