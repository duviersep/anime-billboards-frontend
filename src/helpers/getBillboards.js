
async function getBillboards() {
  const urlBillboards = 'http://localhost:8080/billboards';
  const res = await fetch(urlBillboards);
  const {response} = await res.json();
  return response;
}

export default getBillboards;
