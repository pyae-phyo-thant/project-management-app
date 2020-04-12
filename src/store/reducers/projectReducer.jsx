const initState = {
  projects: [
    {id: '1', title: 'Junction River', content: 'blah blah blah'},
    {id: '2', title: 'Junction', content: 'blah blah blah'},
    {id: '3', title: 'School', content: 'blah blah blah'},
    {id: '4', title: 'Testtest', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    case 'DELETE_PROJECT':
      console.log('delete project');
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error', 'state: ', state, 'action: ', action.project);
      return state;
    default:
      return state
  }
}

export default projectReducer
