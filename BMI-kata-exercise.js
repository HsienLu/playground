// 小步測試，反覆驗證
let bmiHistoryData = [];
const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}
function printbmiStatesText(state) {
  console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
}
function addBmiData(bmi,state){
  let obj = {};
  obj.bmi = bmi;
  obj.state = state;
  bmiHistoryData.push(obj);
}
function getBmiValue(height,weight){
 return  (weight / ((height / 100) * (height / 100))).toFixed(2);
}
function printBmi(height, weight) {
    const bmi=getBmiValue(height,weight)
    let bmiState=""

  if (bmi < 18.5) {
    //overThin
    bmiState="overThin"
  } else if ( bmi < 24) {
    //normal
    bmiState="normal"
  } else if ( bmi < 27) {
    //overWeight
    bmiState="overWeight"
  } else if ( bmi < 30) {
    //mildFat
    bmiState="mildFat"
  } else if ( bmi < 35) {
    //moderateFat
    bmiState="moderateFat"
  } else if (bmi >= 35) {
    //severeFat
    bmiState="severeFat"
  } else {
    console.log("您的數值輸入錯誤，請重新輸入")
  }
  addBmiData(bmi,bmiState)
}
function showHistoryData(){
  const bmiTotalNum = bmiHistoryData.length;
  const lastBmiNum = bmiTotalNum - 1;
  const lastBmiState = bmiHistoryData[lastBmiNum].state
  console.log(`您總共計算 ${bmiTotalNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastBmiNum].bmi}，體重${bmiStatesData[lastBmiState].state}！健康指數為${bmiStatesData[lastBmiState].color}！`);
}
// 輸入數據，顯示對應物件內容
printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData();


