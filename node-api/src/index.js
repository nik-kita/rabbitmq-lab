async function main() {
  const [s, r] = await Promise.all([
    require("./sender"),
    require("./receiver"),
  ]);

  await new Promise((resolve) => {
    setTimeout(() => {
      Promise.all([s(), r()]).then(resolve);
    }, 10_000);
  });
}

main();
