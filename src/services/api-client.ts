import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: 'eda6ad2490fa4ef3b799fa0fff590ead'
    }
})