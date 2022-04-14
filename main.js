const todos = [
    {id: 125223, skill: 'football', done: true},
    {id: 127904, skill: 'cars', done: false},
    {id: 139608, skill: 'pc', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find( (skill) => skill.id === id);
  }


  
  function getAll() {
    return skills;
  }