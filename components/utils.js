// prettier-ignore
export const cdnImage = (name, placeholder,folder='/photography',count=10) => {
  if (process.env.NODE_ENV === "production") {
    if (placeholder) {
      return "https://dcdpavif86wt9.cloudfront.net"+folder+"/"+name;
    } else {
      return "https://dcdpavif86wt9.cloudfront.net"+folder+"/"+name;
    }
  } else {
    return folder+"/" + name;
  }
};

export const shuffle = (array) => {
  array = [...array];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
