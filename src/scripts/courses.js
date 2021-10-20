export function getCourseById(id, array) {
  let result = "";
  if (array === null || undefined) {
    result = "not found";
  } else {
    result = array.find((item) => {
      return item.id === id;
    });
  }

  return result;
}
