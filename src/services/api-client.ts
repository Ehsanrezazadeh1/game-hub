import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2588c156646c44ab96863d78598b5406'
    }
})