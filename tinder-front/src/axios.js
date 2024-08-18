import axios from "axios";

const instance = axios.create({
	baseURL: "https://tinder--bcknd.herokuapp.com/",
});

export default instance;
