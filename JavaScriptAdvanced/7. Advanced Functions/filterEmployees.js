function filterEmployees(input, criteria) {

  const data = JSON.parse(input);

  criteria === 'all' ? print(data) : print(filterData(data));

  function filterData(arr = []) {

    const [key, value] = criteria.split('-');

    const filtered = arr.filter(employee => {
      if (employee[key] !== undefined && employee[key] === value) {
        return employee
      }
    });

    return filtered;
  }

  function print(arr = []) {
    arr.forEach((employee, index) => {
      console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
  }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'last_name-Johnson');