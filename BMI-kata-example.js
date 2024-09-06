const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色"
  },
  normal: {
    state: "正常",
    color: "紅色"
  },
  overWeight: {
    state: "過重",
    color: "澄色"
  },
  mildFat: {
    state: "輕度肥胖",
    color: "黃色"
  },
  moderateFat: {
    state: "中度肥胖",
    color: "黑色"
  },
  severeFat: {
    state: "重度肥胖",
    color: "綠色"
  },
};

let records = [];

function calculateBMI(height, weight) {
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  return bmi;
}

function getBMIState(bmi) {
  let state = '';
  if (bmi < 18.5) {
    state = 'overThin';
  } else if (bmi < 24) {
    state = 'normal';
  } else if (bmi < 27) {
    state = 'overWeight';
  } else if (bmi < 30) {
    state = 'mildFat';
  } else if (bmi < 35) {
    state = 'moderateFat';
  } else if (bmi >= 35) {
    state = 'severeFat';
  }
  return state;
}

function addRecord(bmi, state) {
  const bmiColor = bmiStatesData[state].color;
  const bmiState = bmiStatesData[state].state;
  
  records.push({
    bmi: bmi,
    state: bmiState,
    color: bmiColor
  });
}

function printBmi(height, weight) {
  const bmi = calculateBMI(height, weight);
  const state = getBMIState(bmi);
  
  if (!state) {
    return '您的數值輸入錯誤，請重新輸入';
  }
  
  addRecord(bmi, state);

  return `您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`;
}

function showHistoryData() {
  return `您總共計算 ${records.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${records[records.length -1].bmi}，體重${records[records.length -1].state}！健康指數為${records[records.length -1].color}！`;
}