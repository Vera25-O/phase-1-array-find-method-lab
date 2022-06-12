function superbowlWin(records){
  const winResult = records.find(championshipYear);
  if (!!winResult === true){
      return winResult.year
  }
  else {
      return undefined
  }
  
}

const championshipYear = function(record) {
  return record.result === 'W'  
}