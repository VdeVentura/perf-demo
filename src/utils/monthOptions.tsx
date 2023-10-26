export const monthOptions = Array.from({ length: 12 })
  .map((_, i) => new Date(0, i).toLocaleString('en-US', { month: 'long' }))
  .map((month, i) => ({ label: month, value: i.toString() }));
