export function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function filterFromDateToToday<T>(
  list: T[],
  appliedFromDate: string,
  getCreatedAt: (item: T) => string | undefined,
  keepIfMissingDate = true
) {
  if (!appliedFromDate) return list;

  const now = new Date();
  const start = startOfDay(new Date(appliedFromDate));

  return list.filter((item) => {
    const createdAt = getCreatedAt(item);
    if (!createdAt) return keepIfMissingDate;

    const created = startOfDay(new Date(createdAt));
    return created >= start && created <= now;
  });
}
