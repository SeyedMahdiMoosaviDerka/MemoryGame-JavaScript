for (i = 0; i < GamesData.length; i++) {
  items = document.createElement("div");
  items.className = "items";
  items.setAttribute("src-path", GamesData[i]._URL);
  items.setAttribute("Section-Id", GamesData[i].Id);
  items.innerHTML = i + 1;
  GameHolder.appendChild(items);
}

Items = document.querySelectorAll(".game_holder > .items");
Items[0].onclick = function () {
  Onclick_On_Sections(1);
};
Items[1].onclick = function () {
  Onclick_On_Sections(2);
};
Items[2].onclick = function () {
  Onclick_On_Sections(3);
};
Items[3].onclick = function () {
  Onclick_On_Sections(4);
};
Items[4].onclick = function () {
  Onclick_On_Sections(5);
};
Items[5].onclick = function () {
  Onclick_On_Sections(6);
};
Items[6].onclick = function () {
  Onclick_On_Sections(7);
};
Items[7].onclick = function () {
  Onclick_On_Sections(8);
};
Items[8].onclick = function () {
  Onclick_On_Sections(9);
};
Items[9].onclick = function () {
  Onclick_On_Sections(10);
};
Items[10].onclick = function () {
  Onclick_On_Sections(11);
};
Items[11].onclick = function () {
  Onclick_On_Sections(12);
};
Items[12].onclick = function () {
  Onclick_On_Sections(13);
};
Items[13].onclick = function () {
  Onclick_On_Sections(14);
};
Items[14].onclick = function () {
  Onclick_On_Sections(15);
};
Items[15].onclick = function () {
  Onclick_On_Sections(16);
};
Items[16].onclick = function () {
  Onclick_On_Sections(17);
};
Items[17].onclick = function () {
  Onclick_On_Sections(18);
};
Items[18].onclick = function () {
  Onclick_On_Sections(19);
};
Items[19].onclick = function () {
  Onclick_On_Sections(20);
};

selected_Sections = [
  { Id: "", img_Path: "", Position: "" },
  { Id: "", img_Path: "", Position: "" },
];

var Point = 0;

function Onclick_On_Sections(a) {
  currentIMG = Items[a - 1].getAttribute("src-path");
  currentId = Items[a - 1].getAttribute("Section-Id");
  currentPosition = a - 1;

  Items[a - 1].style.color = "transparent";
  Items[a - 1].style.background =
    "url('IMG/" + currentIMG + "') no-repeat 50% 50%";

  if (selected_Sections[0].Id == "") {
    selected_Sections[0].Id = currentId;
    selected_Sections[0].img_Path = currentIMG;
    selected_Sections[0].Position = currentPosition;
  } else if (selected_Sections[1].Id == "") {
    selected_Sections[1].Id = currentId;
    selected_Sections[1].img_Path = currentIMG;
    selected_Sections[1].Position = currentPosition;
    CheckingStiuation();
  }

  function CheckingStiuation() {
    if (
      selected_Sections[0].img_Path == selected_Sections[1].img_Path &&
      selected_Sections[0].Id != selected_Sections[1].Id
    ) {
      setTimeout(() => {
        Point++;
        console.log(Point);
        CurrentPoint.innerHTML = "score : " + Point;

        if (Point == GamesData.length / 2) {
          alert("you are win (;");
          location.reload();
        }

        Items[selected_Sections[0].Position].style.opacity = "0";
        Items[selected_Sections[0].Position].style.visibility = "hidden";
        Items[selected_Sections[1].Position].style.opacity = "0";
        Items[selected_Sections[1].Position].style.visibility = "hidden";
        //clear selecting
        Clear_selected_Sections();
      }, 500);
    } else {
      setTimeout(() => {
        Items[selected_Sections[0].Position].style.background = "black";
        Items[selected_Sections[0].Position].style.backgroundPosition =
          "50% 50%";
        Items[selected_Sections[0].Position].style.color = "white";
        Items[selected_Sections[1].Position].style.background = "black";
        Items[selected_Sections[1].Position].style.backgroundPosition =
          "50% 50%";
        Items[selected_Sections[1].Position].style.color = "white";
        //clear selecting
        Clear_selected_Sections();
      }, 500);
    }
  }
  function Clear_selected_Sections() {
    selected_Sections[1].Id = "";
    selected_Sections[1].img_Path = "";
    selected_Sections[0].Id = "";
    selected_Sections[0].img_Path = "";
  }

  // console.log(selected_Sections[0].img_Path);
  // console.log(selected_Sections);
}
