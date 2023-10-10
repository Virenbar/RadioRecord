export function formatDateTime(date: Date) {
  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);//WTF C -> Java -> JS
  const day = formatNumber(date.getDate());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());
  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);//WTF C -> Java -> JS
  const day = formatNumber(date.getDate());
  return `${year}.${month}.${day}`;
}

export function formatTime(date: Date) {
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function formatNumber(number: number) {
  return `${number}`.padStart(2, "0");
}
