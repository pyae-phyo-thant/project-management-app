export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstname,
      authorLastName: profile.lastname,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERR', err})
    })
  }
}

export const deleteProject = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('projects').doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_PROJECT', id })
      }).catch(err => {
        dispatch({ type: 'DELETE_PROJECT_ERROR', err })
    })
  }
};
