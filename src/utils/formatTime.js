export const formatTime = (sec) => {
  if (typeof sec !== 'number' || sec < 0) {
    return null;
  }
  let second = Math.floor(sec % 60);
  let minute = Math.floor(sec / 60 % 60);
  let hour = Math.floor(sec / 60 / 60);

  //number.toString().padStart(padding, "0")
  hour = hour.toString().padStart(2, '0');
  minute = minute.toString().padStart(2, '0');
  second = second.toString().padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};
