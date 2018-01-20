function forLoop(array) {
  for (int i = 0; i < 25; i++) {
    array.append(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}
