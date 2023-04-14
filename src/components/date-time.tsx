export default function convertTimeStampToDate(input: any) {
  const date = new Date(input);

  const result = date.toLocaleDateString("th", {
    // you can use undefined as first argument
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return result;
}
