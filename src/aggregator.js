import axios from 'axios';

const getRandomUser = async () => {
  const response = await axios.get('https://randomuser.me/api/');
  return response.data.results[0];
};

const API_KEY = '8bf94ba35c4e44398bcfc9605c09c5b9';
const randommerBase = 'https://randommer.io/api';

const getPhone = async () => {
  const res = await axios.get(`${randommerBase}/Phone/Generate`, {
    headers: { 'X-Api-Key': API_KEY },
    params: {
      CountryCode: 'FR',
      Quantity: 1
    }
  });
  return res.data[0];
};

const runAggregation = async () => {
  console.log("Aggregation started...");

  const user = await getRandomUser();
  const phone = await getPhone();

  console.log({
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    country: user.location.country,
    phone: phone
  });
};

runAggregation();
