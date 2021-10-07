import url from "url";
import request from "request";

const contract = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

const APIkey = "DVVEURQ6MAH8CZD1H8J5P85U4Q9V5X131P";

const addresses = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const checkTokenValue = async (contract: string, address: string) => {
  const requestUrl = url.parse(
    url.format({
      protocol: "https",
      hostname: "api.bscscan.com",
      pathname: "/api",
      query: {
        module: "account",
        action: "tokenbalance",
        contractaddress: contract,
        address: address,
        tag: "latest",
        apikey: APIkey,
      },
    })
  );

  let apiUrl =
    requestUrl.protocol + "//" + requestUrl.hostname! + requestUrl.path;

  request(apiUrl, { json: true }, (err, res, body) => {
    console.log(address, " ", body.result);
  });
};

// right now it might not be in order of the address due as the for loop does not wait
for (const addr of addresses) {
  checkTokenValue(contract, addr);
}
