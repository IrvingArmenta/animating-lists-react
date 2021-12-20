function objIsEmpty<T extends Record<string, unknown>>(obj: T) {
  return Object.keys(obj).length === 0;
}

export default objIsEmpty;
