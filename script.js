function checker(input) {
  var pilihan = ["batu", "gunting", "kertas"];
  var num = Math.floor(Math.random() * 3);

  document.getElementById("c_choice").innerHTML = `Komputer memilih ${pilihan[
    num
  ].toUpperCase()}`;

  document.getElementById(
    "u_choice"
  ).innerHTML = `Kamu memilih ${input.toUpperCase()}`;

  let comp_choice = pilihan[num];
  switch (pilihan_object[input][comp_choice]) {
    case "menang":
      hasil_ref.classList.remove("bg-red-600");
      hasil_ref.classList.remove("bg-yellow-300");
      hasil_ref.classList.add("bg-green-600");
      hasil_ref.innerHTML = "Kamu MENANG!";
      u_score++;
      break;
    case "kalah":
      hasil_ref.classList.remove("bg-green-600");
      hasil_ref.classList.remove("bg-yellow-300");
      hasil_ref.classList.add("bg-red-600");
      hasil_ref.innerHTML = "Kamu KALAH";
      c_score++;
      break;
    default:
      hasil_ref.classList.remove("bg-red-600");
      hasil_ref.classList.remove("bg-green-600");
      hasil_ref.classList.add("bg-yellow-300");
      hasil_ref.innerHTML = "HASIL SERI";
      break;
  }

  document.getElementById("c_score").innerHTML = c_score;
  document.getElementById("u_score").innerHTML = u_score;
}

let hasil_ref = document.getElementById("hasil");
let pilihan_object = {
  batu: {
    batu: "seri",
    gunting: "menang",
    kertas: "kalah",
  },
  gunting: {
    batu: "kalah",
    gunting: "seri",
    kertas: "menang",
  },
  kertas: {
    batu: "menang",
    gunting: "kalah",
    kertas: "seri",
  },
};
let [u_score, c_score] = [0, 0];
