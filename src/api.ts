export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
  //   const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //   const json = await response.json();
  //   return json;
}
