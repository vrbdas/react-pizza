import axios from "axios";

// вспомогательная функция, чтобы один раз записать каталог из pizzas.json в firebase. patch, а не push, чтобы firebase не создавал своих ключей

const url = 'https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app/.json';

async function pizzasToDb() {
  const response = await axios.get('/pizzas.json');
  const pizzas = await response.data;
  try {
    axios.patch(url, { catalog: pizzas });
  } catch (err) {
    console.log(err);
  }
}

export default pizzasToDb;