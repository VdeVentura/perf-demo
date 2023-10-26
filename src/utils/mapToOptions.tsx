export const mapToOptions = (data: { name: string; id: string }[]) =>
  data.map((option) => ({ label: option.name, value: option.id }));
