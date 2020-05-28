export default function formDataToHash(form) {
  const formObject = new FormData(form);
  const tempHash = {};
  for (const item of formObject) {
    tempHash[item[0]] = item[1];
  }
  return tempHash;
}
