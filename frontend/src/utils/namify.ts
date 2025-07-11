export const namify = (pkmnName: String) => {
  if (
    [
      "ting-lu",
      "wo-chien",
      "oricorio-pom-pom",
      "chien-pao",
      "porygon-z",
      "chi-yu",
    ].includes(pkmnName.toLowerCase())
  ) {
    pkmnName = pkmnName.replace("-", "");
  }

  return pkmnName.replace(" ", "").toLowerCase();
};
