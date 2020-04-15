import axios from 'axios';


const axiosinstance=axios.create({

    baseURL:"https://myapp-11582.firebaseio.com/"

})


export default axiosinstance;