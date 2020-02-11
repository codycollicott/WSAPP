import moment from "moment";

export const calculateTotalsFromRange = (reflections, days) => {
  const today = moment();
  const fromDate = today.subtract(days, "days");
  const filteredReflections = reflections.filter(reflection => {
    const transactionDate = moment(reflection.date_of_transaction);
    return fromDate.isBefore(transactionDate);
  });
  const totalFromRange = filteredReflections.reduce((total, reflection) => total + reflection.amount, 0);
  return {total: totalFromRange.toFixed(2), transactions: filteredReflections.length}
}

export const findNonRatedReflections = reflections => {
  return reflections.filter((reflection) =>  !reflection.reflected_as );
}

export const findTransactionsFromType = (reflections, type) => {
  return reflections.filter((reflection) =>  reflection.reflected_as === type );
}