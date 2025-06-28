export const print = (data,str) => console.log(JSON.stringify(data, undefined, 2), str);



export function formatDuration(dateInput) {
  const date = new Date(dateInput);

  // Use Intl.DateTimeFormat to format the date as "Nov 2023"
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}