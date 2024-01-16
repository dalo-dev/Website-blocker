//* Get url
const url = window.location.href;

const blackList = ["xxx", "porn"];

for (let i of blackList) {
  if (url.includes(i)) {
    window.location.replace("www.google.com");
  }
}
