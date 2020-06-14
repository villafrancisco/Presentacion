//
const text = document.querySelector(".main__item-description>p").innerHTML;
document.querySelector(".main__item-description > p").innerHTML = "";
const e_text = document.querySelector(".main__item-description > p");

const text2 = document.querySelector(".main__item-description p:last-child ")
  .innerHTML;
document.querySelector(".main__item-description  p:last-child").innerHTML = "";
const e_text2 = document.querySelector(".main__item-description  p:last-child");

setTimeout(() => {
  const t3 = typer(e_text)
    .line(" " + text, { totalTime: 25 })
    .cursor({ block: false, color: "white" });
  setTimeout(() => {
    t3.kill();
    const t4 = typer(e_text2)
      .line(" " + text2, { totalTime: 25 })
      .cursor({ block: false, color: "white" });
  }, 4000);
});
