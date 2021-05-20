/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
  return function(adj="special") {
    return `You are ${flair }${adj}${flair}!`;
  }
}

const Calculator = {
  add: function(a, b) {
    return a+b;
  },
  subtract: function(a, b) {
    return a-b;
  },
  multiply: function(a, b) {
    return a*b;
  },
  divide: function(a, b) {
    return a/b;
  }
}

function actionApplyer(start, fns) {
  for (let i = 0; i < fns.length; i++) {
    start = fns[i](start);
  }
  return start;
}
