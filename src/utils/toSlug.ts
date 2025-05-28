export function toSlug(text) {
  {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[àáâãäå]/g, "a")
      .replace(/ç/g, "c")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/[òóôõö]/g, "o")
      .replace(/[ùúûü]/g, "u")
      .replace(/[ýÿ]/g, "y")
      .replace(/ñ/g, "n");
  }
}
