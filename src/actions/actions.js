// Register a new account in the db and add to the account list
export const QUESTIONS_GET = 'QUESTIONS_GET'

export function getQuestionsFromDB() {
  return (dispatch, getState) => {
    // cState = current state
    let cState = getState()
    // if (!cState.accounts[accounId]) {
    //   console.log('Account not found')
    //   console.log(cState)
    //
    //   return
    // }
  //  debugger
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(event){
      dispatch(
        {type : QUESTIONS_GET, payload: JSON.parse(event.target.responseText)}
      )
    };
    httpRequest.open('GET', 'http://localhost:3000/omebaData/data', true);
    httpRequest.send(null);
//    debugger

    // if (cState.accounts[accounId].group) {
    //   // Remove account from it the actual group
    //   dispatch(
    //     groupsRemoveAccount(cState.accounts[accounId].group, accounId)
    //   )
    // }
    // // Add the group to the account
    // dispatch( accountsUpdate({ ...cState.accounts[accounId], group: toGroup}) )
    // // Add the account to the group
    // dispatch( groupsAddAccount(toGroup, accounId) )
  }
}

export const WAVEDATA_GET = 'WAVEDATA_GET'

export function getWaveDataFromDB() {
  return (dispatch, getState) => {

    let cState = getState()

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(event){
      dispatch(
        {type : WAVEDATA_GET, payload: JSON.parse(event.target.responseText)}
      )
    };
    httpRequest.open('GET', 'http://localhost:3000/omebaData/waveData', true);
    httpRequest.send(null);

  }
}
