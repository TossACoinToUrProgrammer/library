const sortByField = (arr: any[], field: string, direction: 1 | -1 = 1) =>
  [...arr].sort((a, b) => (a[field].toLowerCase() > b[field].toLowerCase() ? 1 * direction : -1 * direction))
export default sortByField
