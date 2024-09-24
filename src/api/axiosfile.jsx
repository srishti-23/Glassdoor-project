import axios from "axios";


// export const baseApi=axios.create({
//     baseUrl:'https://jsearch.p.rapidapi.com',
//     headers:{
//        'x-rapidapi-key': 'c9aabb0847mshfb8c3e00e99677fp1ac30bjsn0b415fdfcc47',
//     'x-rapidapi-host': 'jsearch.p.rapidapi.com',  
//     'Content-Type':'application/json',
//     },
// })


export const baseapi=async(endpoint)=>{


const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/estimated-salary',
  params: {
    job_title: 'NodeJS Developer',
    location: 'New-York, NY, USA',
    radius: '100'
  },
  headers: {
    'x-rapidapi-key': '3b5b88e73emsh2839fd2ca578003p166e2ejsnbcf4097fd0eb',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
    try {
        const response = await axios.request(options);
        console.log(response.data);
    
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
