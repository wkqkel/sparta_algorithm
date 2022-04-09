const solution = (s) => {
  s = s.toLowerCase();

  if (s.split("").reverse().join("") !== s) {
    return "No";
  }
  return "YES";
};

console.log(solution("gooG"));
