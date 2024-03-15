const songs = document.querySelectorAll(".albumTable_song");
console.log(songs);

for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  console.log(play, pause);
  play.addEventListener("click", (e) => {
    //이벤트의 target은 클릭이 된 그 자체. 여기서는 형제 audio를 찾아오는 것이기에 target이 아니고 currenttarget임
    e.currentTarget.closest("td").querySelector("audio").play(); //이벤트가 일어난 지점에서 가장 가까이에 있는 오디오를 재생시키라고 알려주어야함.
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}
