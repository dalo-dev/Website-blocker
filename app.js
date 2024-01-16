const url = window.location.href;
const blackList = [
  /* ADD KEYWORDS */
];
const safeUrl = "https://c.tenor.com/7BErTr3oA_kAAAAd/tenor.gif";

const blockSite = (keyword) => {
  return url.includes(keyword);
};

if (blackList.some(blockSite)) {
  window.location.replace(safeUrl);
}
