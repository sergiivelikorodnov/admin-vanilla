const companyTemplate = document.querySelector('#company');
const tableRow = document.querySelector('#row');

const createRow = singleCompany => {
  const { id, name, email } = singleCompany;
  const companyRow = companyTemplate.cloneNode(true);
  tableRow.appendChild(companyRow);

  companyRow.querySelector('.company_id').innerHTML = id;
  companyRow.querySelector('.company_name').innerHTML = name;
  companyRow.querySelector('.company_email').innerHTML = email;

  return companyRow;
};

const clearData = () => {
  const rowsQuantity = document.querySelectorAll('#company').length;

  for (let i = 0; i < rowsQuantity; i += 1) {
    document.querySelector('#company').remove();
  }
};

const drawData = allData => {
  allData.slice().forEach(singleCompany => {
    createRow(singleCompany);
  });

  companyTemplate.remove();
};

export { drawData, clearData };
