const readline = require("node:readline");

// Membuat interface readline
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

// Pilihan gunting, batu, kertas
const pilihan = [
  { nama: "gunting", value: 1 },
  { nama: "batu", value: 2 },
  { nama: "kertas", value: 3 },
];

// Fungsi untuk mengambil pilihan
function ambilPilihan(input) {
  input = input.toLowerCase();
  return pilihan.find(function (val) {
    return val.nama === input || val.value.toString() === input;
  });
}

// Fungsi untuk menentukan pemenang
function tentukanPemenang(player, computer) {
  if (player.nama === computer.nama) return "Seri";
  switch (player.nama) {
    case "gunting":
      return computer.nama === "kertas" ? "Menang" : "Kalah";
    case "batu":
      return computer.nama === "gunting" ? "Menang" : "Kalah";
    case "kertas":
      return computer.nama === "batu" ? "Menang" : "Kalah";
    default:
      return "Kalah";
  }
}

// Fungsi untuk memainkan game
function mainkan() {
  const pilihanComputer = pilihan[Math.floor(Math.random() * pilihan.length)];
  rl.question("Pilih gunting, batu, atau kertas: ", function (playerInput) {
    const pilihanPlayer = ambilPilihan(playerInput);
    if (!pilihanPlayer) {
      console.log("Pilihan tidak valid");
      mainkan();
      return;
    }
    console.log(`Player: ${pilihanPlayer.nama}`);
    console.log(`Computer: ${pilihanComputer.nama}`);
    console.log(`Hasil: ${tentukanPemenang(pilihanPlayer, pilihanComputer)}`);
    rl.close();
  });
}

mainkan();
