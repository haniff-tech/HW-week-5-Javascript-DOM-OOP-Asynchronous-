const form = document.getElementById('form_register')
const namaInput = document.getElementById("nama_input")
const namaError = document.getElementById("nama_error")

const umurInput = document.getElementById("umur_input")
const umurError = document.getElementById("umur_error")

const uangSangu = document.getElementById("uangSangu_input")
const uangSangu_error = document.getElementById("uangSangu_error")

const submitBtn = document.getElementById("submit_button")
const buttonList = document.getElementById("button_list_pendaftar")
const backToMain = document.getElementById("back_to_main")

const tab_pendaftar = document.getElementById("pendaftar")
const list_pendaftar = document.getElementById("list_pendaftar")


class ListPendaftar {
    constructor(namaP, umurP, uangSanguP) {
        this.namaP = namaP
        this.umurP = umurP
        this.uangSanguP = uangSanguP
    }
}

//buat array untuk menyimpan data pendaftar
const pendaftar = [
    new ListPendaftar("Rizky", "25", "Rp.500.000"),
    new ListPendaftar("Eko", "24", "Rp.200.000"),
    new ListPendaftar("Fadlan", "27", "Rp.700.000")
]


//WINDOW ONLOAD
window.onload = (event) => {

    console.log(`Page is fully loaded`)

    daftarPendaftar()

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        for (item of formData) {
            console.log(item[0], item[1])
        }
        
    })
   
    submitBtn.addEventListener('click', (e) => {

       //Cek input nama jika kosong atau belum diisi maka data tidak akan terkirim
        if (namaInput.value === "") {
            namaError.textContent = "Nama tidak boleh kosong"
            return false
        } else if (namaInput.value.length < 10) {
            namaError.textContent = "Nama minimal 10 karakter"
            return false
        } else {
            namaError.textContent = ""
        } 
        //Cek input umur jika kosong atau belum diisi maka data tidak akan terkirim   
        if (umurInput.value < 25) {
            umurError.textContent = "Umur anda belum cukup"
            return false
        } else {
            umurError.textContent = ""
        } 
        //Cek input uang jika kosong atau belum diisi maka data tidak akan terkirim
        if (uangSangu.value < 100000) {
            uangSangu_error.textContent = "Uang sangu minimal Rp.100.000"
            return false
        } else if (uangSangu.value > 1000000) {
            uangSangu_error.textContent = "Uang sangu maksimal Rp.1.000.000"
            return false
        } else {
            uangSangu_error.textContent = ""
        } 

        //ambil value dari input
        const newPendaftar = new ListPendaftar(namaInput.value, umurInput.value, uangSangu.value)

        pendaftar.push(newPendaftar)



        daftarPendaftar()

        console.log(`Data disubmit`)
        console.log('panjang data = ', pendaftar.length)
    })

    buttonList.addEventListener('click', (e) => {
        console.log(`Pindah ke tab list pendaftar`)
        form.style.display = "none"
        tab_pendaftar.style.display = "block"
    })

    backToMain.addEventListener('click', (e) => {
        console.log(`kembali ke halaman utama`)
        form.style.display = "block"
        tab_pendaftar.style.display = "none"
    })


}


const daftarPendaftar = () => {
    const tBody = document.getElementById('table-body')

    tBody.innerHTML = ""

    for(i=0 ; i < pendaftar.length ; i++) {

        const currentRow = tBody.insertRow(i)

        const cell1 = currentRow.insertCell(0)
        const cell2 = currentRow.insertCell(1)
        const cell3 = currentRow.insertCell(2)

        cell1.innerHTML = pendaftar[i].namaP
        cell2.innerHTML = pendaftar[i].umurP
        cell3.innerHTML = pendaftar[i].uangSanguP
    }


}

//still error
const resume = () => {
    let average = 0
    for (let i=0 ; i<pendaftar.length ; i++){
        let currentNum = pendaftar.umurP[i]
        average += currentNum
    }
    average = average / pendaftar.length
    return average
   
}

