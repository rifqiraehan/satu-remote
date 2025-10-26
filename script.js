let currentDevice = null;
let currentButtons = [];

// startup
window.addEventListener("load", () => navigate("home"));

function goToLearningMode(deviceName, buttons) {
  currentDevice = deviceName;
  currentButtons = buttons;
  navigate("learning");
}

// navigasi halaman
function navigate(page) {
  const app = document.getElementById("app");
  if (page === "home") app.innerHTML = pageHome();
  else if (page === "learning") app.innerHTML = pageLearningMode();
  else if (page === "remote") app.innerHTML = pageRemote();
}

// halaman utama
function pageHome() {
  const devices = JSON.parse(localStorage.getItem("devices") || "[]");
  return `
    <h2 class="text-center text-lg font-semibold text-[#1A434E] mb-6">
      Daftar Device Terhubung
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center">
      ${devices.map((d, i) => `
        <div onclick="showDeviceModal(${i})"
          class="bg-purple-100 text-center text-base font-medium text-[#1A434E] rounded-xl px-4 py-6 w-full h-32 shadow-sm cursor-pointer hover:scale-[1.02] transition flex items-center justify-center">
          ${d.name.length > 20 ? d.name.substring(0, 20) + '...' : d.name}
        </div>
      `).join('')}

      <button onclick="showAddModal()"
        class="border-2 border-dashed border-gray hover:border-[#1A434E] rounded-xl w-full h-32 flex flex-col items-center justify-center text-[#1A434E] text-sm font-medium hover:bg-gray-50 transition">
        <span class="text-lg font-bold mb-1">+</span>
        Tambahkan Device
      </button>
    </div>

    ${modalAddDevice()}
    ${modalDeviceDetail()}
    ${modalConfirmDelete()}
    ${modalButtonForm()}
    ${modalLearningGuide()}
  `;
}

// modal tambah device
function modalAddDevice() {
  const templates = ["CUSTOM", "TV", "AC", "DVD", "PROJECTOR"];
  return `
    <div id="modalAdd" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg relative">
        <button onclick="hideAddModal()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700">×</button>
        <h3 class="text-lg font-semibold text-center text-[#1A434E] mb-4">Device Baru</h3>

        <label class="block text-sm text-[#1A434E] mb-1">Gunakan template</label>
        <select id="templateSelect" class="w-full border rounded-lg px-3 py-2 mb-4">
          ${templates.map(t => `<option value="${t}">${t}</option>`).join('')}
        </select>

        <label class="block text-sm text-[#1A434E] mb-1">Nama device</label>
        <input id="deviceNameInput" type="text" placeholder="Masukkan nama device"
          class="w-full border rounded-lg px-3 py-2 mb-4" />

        <button onclick="showButtonForm()" class="w-full bg-[#1A434E] text-white py-2 rounded-lg font-medium hover:bg-[#14333c] transition">
          LANJUT →
        </button>
      </div>
    </div>
  `;
}

function showAddModal() {
  document.getElementById("modalAdd").classList.remove("hidden");
}
function hideAddModal() {
  document.getElementById("modalAdd").classList.add("hidden");
}

// modal form tombol remote (multi-select)
function modalButtonForm() {
  return `
    <div id="modalButtons" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-96 shadow-lg relative text-[#1A434E]">
        <button onclick="hideButtonForm()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700">×</button>
        <h3 class="text-lg font-semibold text-center mb-4">Pilih Tombol Remote</h3>

        <div class="flex flex-wrap gap-2 mb-4" id="buttonList"></div>

        <div class="flex">
          <input id="newButtonInput" type="text" placeholder="Tambah tombol..."
            class="flex-grow border rounded-lg px-3 py-2 text-sm" />
          <button onclick="addNewButton()" class="ml-2 px-4 py-2 bg-[#1A434E] text-white rounded-lg hover:bg-[#14333c]">Tambah</button>
        </div>

        <div class="flex justify-end mt-6">
          <button onclick="goToLearningWithButtons()" class="px-4 py-2 rounded-lg bg-[#1A434E] text-white hover:bg-[#14333c]">
            LANJUT →
          </button>
        </div>
      </div>
    </div>
  `;
}

const defaultButtons = [
  "Power On", "Power Off",
  "Arrow Up", "Arrow Down",
  "Arrow Left", "Arrow Right",
  "Volume Up", "Volume Down"
];
let selectedButtons = [...defaultButtons];

function showButtonForm() {
  const name = document.getElementById("deviceNameInput").value.trim();
  if (!name) return alert("Masukkan nama device terlebih dahulu!");
  hideAddModal();
  renderButtonList();
  document.getElementById("modalButtons").classList.remove("hidden");
  window.tempDeviceName = name;
}

function hideButtonForm() {
  document.getElementById("modalButtons").classList.add("hidden");
}

function renderButtonList() {
  const container = document.getElementById("buttonList");
  if (!container) return;
  container.innerHTML = selectedButtons.map((b, i) => `
    <span class="bg-gray-100 border rounded-full px-3 py-1 text-sm flex items-center gap-2">
      ${b}
      <button onclick="removeButton(${i})" class="text-red-500 hover:text-red-700 font-bold">×</button>
    </span>
  `).join("");
}

function addNewButton() {
  const input = document.getElementById("newButtonInput");
  const val = input.value.trim();
  if (!val) return;
  selectedButtons.push(val);
  input.value = "";
  renderButtonList();
}

function removeButton(index) {
  selectedButtons.splice(index, 1);
  renderButtonList();
}

function goToLearningWithButtons() {
  const name = window.tempDeviceName;
  const devices = JSON.parse(localStorage.getItem("devices") || "[]");
  devices.push({ name, buttons: selectedButtons });
  localStorage.setItem("devices", JSON.stringify(devices));

  window.currentDeviceIndex = devices.length - 1;
  
  hideButtonForm();

  window.tempLearningData = { name, buttons: selectedButtons };
  showLearningGuide();
}

// modal panduan sebelum learning
function modalLearningGuide() {
  return `
    <div id="modalGuide" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-96 shadow-xl text-[#1A434E] text-center relative animate-fade-in">
        <button onclick="hideLearningGuide()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700">×</button>

        <!-- Judul dan teks -->
        <h3 class="text-xl font-semibold mb-2">Siap untuk Mode Learning?</h3>
        <p class="text-sm text-gray-600 mb-5 leading-relaxed">
          Sebelum memulai, pastikan:
        </p>

        <ul class="text-sm text-left text-gray-700 mb-5 space-y-2 list-disc list-inside">
          <li>Remote asli sudah disiapkan dan berfungsi.</li>
          <li>Posisikan remote menghadap Modul Satu Remote.</li>
          <li>Tekan tombol sesuai instruksi di layar nanti.</li>
        </ul>

        <!-- Tombol -->
        <div class="flex justify-center gap-3 mt-2">
          <button onclick="hideLearningGuide()" class="px-4 py-2 rounded-lg border hover:bg-gray-50">
            Batal
          </button>
          <button onclick="startLearning()" class="px-4 py-2 rounded-lg bg-[#1A434E] text-white hover:bg-[#14333c]">
            Mulai Learning →
          </button>
        </div>
      </div>
    </div>
  `;
}

function showLearningGuide() {
  document.getElementById("modalGuide").classList.remove("hidden");
}

function hideLearningGuide() {
  document.getElementById("modalGuide").classList.add("hidden");
}

function startLearning() {
  const { name, buttons } = window.tempLearningData;
  hideLearningGuide();
  goToLearningMode(name, buttons);
}

// halaman mode learning
function pageLearningMode() {
  const list = currentButtons.map((btn, i) => `
    <li class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full ${i < 3 ? 'bg-green-500' : 'bg-black'}"></span>
      Tekan tombol ${btn} di Remote Asli
    </li>
  `).join("");

  return `
    <div class="text-[#1A434E] text-center px-6">
      <h3 class="text-lg font-semibold mb-2">Mode Learning</h3>
      <p class="text-sm text-gray-600 mb-4">${currentDevice}</p>
      <ul class="text-left inline-block mb-6 space-y-2">${list}</ul>

      <div class="flex justify-center gap-4">
        <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">Lewati Proses</button>
        <button onclick="navigate('remote')" class="px-4 py-2 bg-[#1A434E] text-white rounded-lg hover:bg-[#14333c]">Lanjut →</button>
      </div>
    </div>
  `;
}

// halaman remote
function pageRemote() {
  const buttons = currentButtons.map(b => `
    <div onclick="alert('Tombol ${b} ditekan!')"
      class="bg-gray-100 rounded-xl py-3 text-[#1A434E] font-medium text-sm shadow-sm cursor-pointer hover:bg-gray-200 transition">
      ${b}
    </div>
  `).join("");

  return `
    <div class="text-center text-[#1A434E] px-6">
      <div class="flex items-center justify-center gap-2 mb-4">
        <h3 class="text-lg font-semibold">${currentDevice}</h3>
        <button onclick="showEditModal()" class="text-gray-500 hover:text-gray-700 text-sm" title="Edit Device">
          <!-- icon pensil (SVG) -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 528.899 528.899" class="h-4 w-4">
            <g>
              <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/>
            </g>
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">${buttons}</div>

      <button onclick="navigate('home')" class="px-4 py-2 bg-[#1A434E] text-white rounded-lg hover:bg-[#14333c]">← Kembali</button>
      <button onclick="showRelearnConfirm()" class="px-4 py-2 mt-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Pelajari Ulang Remote</button>

      ${modalDeviceDetail()}
      ${modalConfirmDelete()}
      ${modalConfirmRelearn()}
    </div>
  `;

}

// modal konfirmasi pengenalan remote ulang
function modalConfirmRelearn() {
  return `
    <div id="modalRelearn" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg text-center text-[#1A434E]">
        <p class="mb-4 text-sm">Apakah Anda yakin ingin memulai ulang proses pengenalan tombol untuk remote ini?</p>
        <div class="flex justify-center gap-3">
          <button onclick="hideRelearnConfirm()" class="px-4 py-2 rounded-lg border hover:bg-gray-50">Batal</button>
          <button onclick="confirmRelearn()" class="px-4 py-2 rounded-lg bg-[#1A434E] text-white hover:bg-[#14333c]">
            Ya, mulai ulang
          </button>
        </div>
      </div>
    </div>
  `;
}

function showRelearnConfirm() {
  document.getElementById("modalRelearn").classList.remove("hidden");
}
function hideRelearnConfirm() {
  document.getElementById("modalRelearn").classList.add("hidden");
}
function confirmRelearn() {
  hideRelearnConfirm();
  goToLearningMode(currentDevice, currentButtons);
}

// modal edit, hapus device
function modalDeviceDetail() {
  return `
    <div id="modalDetail" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg relative">
        <button onclick="hideDeviceModal()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700">×</button>
        <h3 class="text-lg font-semibold text-center text-[#1A434E] mb-4">Edit Device</h3>
        <input id="editDeviceName" type="text"
          class="w-full border rounded-lg px-3 py-2 mb-4 text-[#1A434E]"
          placeholder="Nama device" />
        <div class="flex justify-between">
          <button onclick="saveDeviceEdit()" class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Simpan</button>
          <button onclick="showConfirmDelete()" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Hapus</button>
        </div>
      </div>
    </div>
  `;
}

function showDeviceModal(index) {
  const devices = JSON.parse(localStorage.getItem("devices") || "[]");
  const device = devices[index];
  currentDevice = device.name;
  currentButtons = device.buttons;
  window.currentDeviceIndex = index;
  navigate("remote");
}

function saveDeviceEdit() {
  const name = document.getElementById("editDeviceName").value.trim();
  if (!name) return alert("Nama device tidak boleh kosong.");

  const devices = JSON.parse(localStorage.getItem("devices") || "[]");
  const index = window.currentDeviceIndex ?? devices.findIndex(d => d.name === currentDevice);

  if (index === -1) return alert("Device tidak ditemukan.");

  devices[index].name = name;
  localStorage.setItem("devices", JSON.stringify(devices));

  currentDevice = name;

  hideDeviceModal();
  navigate("remote");
}


function showEditModal() {
  const devices = JSON.parse(localStorage.getItem("devices") || "[]");
  const device = devices[window.currentDeviceIndex];
  document.getElementById("modalDetail").classList.remove("hidden");
  document.getElementById("editDeviceName").value = device.name;
}

function hideDeviceModal() {
  document.getElementById("modalDetail").classList.add("hidden");
}

// modal konfirmasi hapus
function modalConfirmDelete() {
  return `
    <div id="modalConfirm" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-72 shadow-lg text-center">
        <p class="text-[#1A434E] mb-4 text-sm">Yakin ingin menghapus device ini?</p>
        <div class="flex justify-center gap-3">
          <button onclick="hideConfirmDelete()" class="px-4 py-2 rounded-lg border text-[#1A434E] hover:bg-gray-50">Batal</button>
          <button onclick="deleteDevice()" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Hapus</button>
        </div>
      </div>
    </div>
  `;
}

function showConfirmDelete() {
  hideDeviceModal();
  document.getElementById("modalConfirm").classList.remove("hidden");
}
function hideConfirmDelete() {
  document.getElementById("modalConfirm").classList.add("hidden");
}
function deleteDevice() {
  const devices = JSON.parse(localStorage.getItem("devices") || "[]");
  devices.splice(window.currentDeviceIndex, 1);
  localStorage.setItem("devices", JSON.stringify(devices));
  hideConfirmDelete();
  navigate("home");
}