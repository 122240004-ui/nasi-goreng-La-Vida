document.addEventListener("DOMContentLoaded", function () {
  console.log("LA VIDA MENU BERHASIL DIMUAT!");
  const categoryContent = document.getElementById("lavidaCategoryContent");
  const tabs = document.querySelectorAll(".lavida-tab");

  const modal = document.getElementById("foodModal");
  const closeModal = document.getElementById("closeFoodModal");
  const modalFoodImage = document.getElementById("modalFoodImage");
  const modalFoodName = document.getElementById("modalFoodName");
  const modalFoodPrice = document.getElementById("modalFoodPrice");
  const modalFoodDescription = document.getElementById("modalFoodDescription");

 
const menuData = {

  "nasi-goreng": {
    categoryLabel: "NASI GORENG LA VIDA",
    title: "Nasi Goreng",
    image: "assets/img/menu/nasi-goreng.png",
    description: "Pilihan nasi goreng khas La Vida dengan cita rasa smoky dan topping favorit.",
    items: [
      { name: "Nasi Goreng Telur", price: "Rp13.000", description: "Nasi goreng klasik dengan tambahan telur." },
      { name: "Nasi Goreng Ayam", price: "Rp16.000", description: "Nasi goreng dengan potongan ayam pilihan." },
      { name: "Nasi Goreng Ati Ampela", price: "Rp16.000", description: "Nasi goreng gurih dengan ati ampela." },
      { name: "Nasi Goreng Sosis", price: "Rp16.000", description: "Nasi goreng dengan topping sosis." },
      { name: "Nasi Goreng Bakso", price: "Rp16.000", description: "Nasi goreng dengan potongan bakso." },
      { name: "Nasi Goreng Sea Food", price: "Rp22.000", description: "Nasi goreng dengan topping seafood." },
      { name: "Nasi Goreng Sapi", price: "Rp22.000", description: "Nasi goreng dengan topping daging sapi." },
      { name: "Nasi Goreng Kambing", price: "Rp22.000", description: "Nasi goreng dengan topping daging kambing." },
      { name: "Nasi Goreng Oriental", price: "Rp25.000", description: "Nasi goreng dengan sentuhan oriental." },
      { name: "Nasi Goreng Lengkap", price: "Rp25.000", description: "Nasi goreng dengan topping lengkap." },
      { name: "Spesial Magelangan", price: "Rp25.000", description: "Perpaduan nasi dan mie dalam sajian spesial." }
    ]
  },

  "mie-bihun": {
    categoryLabel: "MIE & BIHUN LA VIDA",
    title: "Mie/Bihun",
    image: "assets/img/menu/mie-bihun.png",
    description: "Pilihan mie dan bihun La Vida dengan aneka topping favorit.",
    items: [
      { name: "Mie/Bihun (Goreng/Kuah) Ayam", price: "Rp13.000", description: "Mie atau bihun dengan topping ayam." },
      { name: "Mie/Bihun (Goreng/Kuah) Ati Ampela", price: "Rp16.000", description: "Mie atau bihun dengan ati ampela." },
      { name: "Mie/Bihun (Goreng/Kuah) Sea Food", price: "Rp22.000", description: "Mie atau bihun dengan topping seafood." },
      { name: "Mie/Bihun (Goreng/Kuah) Sapi", price: "Rp22.000", description: "Mie atau bihun dengan topping sapi." },
      { name: "Mie/Bihun (Goreng/Kuah) Kambing", price: "Rp22.000", description: "Mie atau bihun dengan topping kambing." },
      { name: "Mie/Bihun (Goreng/Kuah) Lengkap", price: "Rp25.000", description: "Mie atau bihun dengan topping lengkap." }
    ]
  },
  
  "capcay": {
    categoryLabel: "CAPCAY LA VIDA",
    title: "Capcay",
    image: "assets/img/menu/capcay.png",
    description: "Aneka capcay La Vida dengan sayuran segar dan pilihan topping favorit.",
    items: [
      {
        name: "Capcay Ayam",
        price: "Rp16.000",
        description: "Capcay dengan sayuran segar dan potongan ayam."
      },
      {
        name: "Capcay Ati Ampela",
        price: "Rp16.000",
        description: "Capcay dengan tambahan ati ampela yang gurih."
      },
      {
        name: "Capcay Sea Food",
        price: "Rp22.000",
        description: "Capcay dengan aneka topping seafood."
      },
      {
        name: "Capcay Sapi",
        price: "Rp22.000",
        description: "Capcay dengan potongan daging sapi."
      },
      {
        name: "Capcay Kambing",
        price: "Rp22.000",
        description: "Capcay dengan potongan daging kambing."
      },
      {
        name: "Capcay Lengkap",
        price: "Rp25.000",
        description: "Capcay dengan kombinasi topping lengkap."
      }
    ]
  },
  

"minuman": {
  categoryLabel: "MINUMAN LA VIDA",
  title: "Minuman",
  image: "assets/img/menu/teh.png",
  description: "Pilihan minuman segar dan hangat untuk menemani hidangan La Vida.",
  items: [
    {
      name: "Teh (Es / Hangat)",
      price: "Rp4.000",
      description: "Teh pilihan yang dapat disajikan dingin maupun hangat.",
      image: "assets/img/menu/teh.png"
    },
    {
      name: "Jeruk (Es / Hangat)",
      price: "Rp4.000",
      description: "Minuman jeruk dengan rasa segar yang dapat disajikan dingin maupun hangat.",
      image: "assets/img/menu/jeruk.png"
    },
    {
      name: "GoodDay (Es / Hangat)",
      price: "Rp4.000",
      description: "Kopi GoodDay yang nikmat, tersedia dalam sajian dingin maupun hangat.",
      image: "assets/img/menu/goodday.png"
    },
    {
      name: "Nutrisari (Es / Hangat)",
      price: "Rp4.000",
      description: "Minuman Nutrisari dengan pilihan penyajian dingin maupun hangat.",
      image: "assets/img/menu/nutrisari.png"
    },
    {
      name: "Air Putih (Es / Biasa / Hangat)",
      price: "Rp1.500",
      description: "Air putih yang tersedia dalam pilihan dingin, suhu biasa, maupun hangat.",
      image: "assets/img/menu/air-putih.png"
    }
  ]
},

"tambahan": {
  categoryLabel: "MENU TAMBAHAN LA VIDA",
  title: "Tambahan",
  image: null,
  description: "Pilihan tambahan untuk melengkapi hidangan favorit Anda.",
  items: [
    {
      name: "Nasi Putih",
      price: "Rp5.000",
      description: "Tambahan nasi putih."
    },
    {
      name: "1/2 Porsi",
      price: "Rp8.000",
      description: "Tambahan setengah porsi."
    },
    {
      name: "Telur Mata Sapi/Dadar",
      price: "Rp4.000",
      description: "Tambahan telur sesuai pilihan."
    }
  ]
},




};
function renderCategory(filter) {
  // Jika All Menu dipilih, tampilkan semua kategori
  const categories = filter === "all"
    ? Object.entries(menuData)
    : menuData[filter]
      ? [[filter, menuData[filter]]]
      : [];

  if (categories.length === 0) {
    categoryContent.innerHTML = `
      <div class="lavida-coming-soon">
        <h3>Menu belum tersedia</h3>
      </div>
    `;
    return;
  }

  // Tampilkan setiap kategori
categoryContent.innerHTML = categories.map(([key, data]) => `
  <div class="lavida-category-box ${data.image ? "" : "lavida-category-text-only"}">

    ${data.image ? `
      <div class="lavida-category-image-side">
        <div class="lavida-category-image-wrap">
          <img
            src="${data.image}"
            alt="${data.title}"
            class="lavida-category-image"
          >
        </div>
      </div>
    ` : ""}

    <div class="lavida-category-list-side">

        <span class="lavida-category-label">
          ${data.categoryLabel}
        </span>

        <h3 class="lavida-category-title">
          ${data.title}
        </h3>

        <p class="lavida-category-description">
          ${data.description}
        </p>

        <div class="lavida-menu-list">
          ${data.items.map(item => `
            <button
              type="button"
              class="lavida-menu-item"
              data-name="${item.name}"
              data-price="${item.price}"
              data-description="${item.description}"
            data-image="${item.image || data.image}"
            >
              <span class="item-name">${item.name}</span>
              <span class="item-price">${item.price}</span>
            </button>
          `).join("")}
        </div>

      </div>
    </div>
  `).join("");
// TOMBOL TUTUP MENU
categoryContent.insertAdjacentHTML("afterbegin", `
  <div class="lavida-menu-close-wrap">
    <button type="button" class="lavida-menu-close" id="closeLavidaMenu">
      <i class="bi bi-x-lg"></i> Tutup Menu
    </button>
  </div>
`);

// EVENT KLIK TUTUP MENU
document.getElementById("closeLavidaMenu").addEventListener("click", function () {

  // Hapus kategori aktif
  tabs.forEach(btn => btn.classList.remove("active"));

  // Kembalikan ke tampilan awal
  categoryContent.innerHTML = `
    <div class="lavida-menu-welcome">
      <i class="bi bi-stars"></i>
      <h3>Temukan Menu Favoritmu</h3>
      <p>Pilih kategori menu di atas untuk melihat pilihan hidangan La Vida.</p>
    </div>
  `;

});
  // Fungsi popup detail menu
 // Fungsi pergantian foto dan detail menu
const menuItems = categoryContent.querySelectorAll(".lavida-menu-item");

menuItems.forEach(item => {
  item.addEventListener("click", function () {

    const selectedImage = this.dataset.image;

    const categoryBox = this.closest(".lavida-category-box");
    const categoryImage = categoryBox.querySelector(".lavida-category-image");

    if (categoryImage) {
      categoryImage.src = selectedImage;
    }

    modalFoodImage.src = selectedImage;
    modalFoodName.textContent = this.dataset.name;
    modalFoodPrice.textContent = this.dataset.price;
    modalFoodDescription.textContent = this.dataset.description;

  });
});

} // Penutup fungsi renderCategory


// EVENT KLIK KATEGORI MENU
tabs.forEach(tab => {
  tab.addEventListener("click", function () {

    // Menghapus status aktif dari semua tab
    tabs.forEach(btn => btn.classList.remove("active"));

    // Mengaktifkan tab yang diklik
    this.classList.add("active");

    // Mengambil kategori yang dipilih
    const filter = this.getAttribute("data-filter");

    // Menampilkan kategori sesuai pilihan
    renderCategory(filter);

  });
});

  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

categoryContent.innerHTML = `
  <div class="lavida-menu-welcome">
    <i class="bi bi-stars"></i>
    <h3>Temukan Menu Favoritmu</h3>
    <p>Pilih kategori menu di atas untuk melihat pilihan hidangan La Vida.</p>
  </div>
`;
// TAMPILAN AWAL MENU
categoryContent.innerHTML = `
  <div class="lavida-menu-welcome">
    <i class="bi bi-stars"></i>
    <h3>Temukan Menu Favoritmu</h3>
    <p>Pilih kategori menu di atas untuk melihat pilihan hidangan La Vida.</p>
  </div>
`;

}); // Penutup DOMContentLoaded