const getData = () => {
  fetch("https://static.ngnrs.io/test/prices").then((response) => {
    let resp = response.json();
    return resp.data.prices;
  });
};

module.exports ={
  getData
}