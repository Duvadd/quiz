// let url = window.location.href
let urlSearch = window.location.search
console.log(urlSearch);
if (urlSearch.includes("?")){
    console.log(urlSearch);
    let kerdes = urlSearch.split("?")[1]
    // console.log("kerdes: ", kerdes)
    let kerdesparok = kerdes.split("&")
    console.log(kerdesparok);
    let fovaros = ""
    let vizeses = ""
    for(let i = 0; i < kerdesparok.length; i++) {
        console.log(kerdesparok[i])
        if(kerdesparok[i].startsWith(fovaros)) {
            fovaros = kerdesparok[i].split(" = ")[1]
        }
        else if(kerdesparok[i].startsWith("vizeses")) {
        vizeses = kerdesparok[i].split("=")[i]
    }
    }

    let latnivalo = []
    let latnivaloszoveg = ""
    for(let i = 0; i < kerdesparok.length; i++)
        if(kerdesparok[i].startsWith("latnivalo")) {
            latnivalo.push(kerdesparok[i].split("=")[1])
        }

        let vizeseseredmeny = documnet.getElementById("vizeses_eredmeny")
        if(vizezes === "Gulfoss") {
            vizeseseredmeny.innerHTML = `<p style="color; green;">Helyes valasz</p>`
        }
        else {
            vizeseseredmeny.innerHTML = `<p style="color: red;">AVálasztottvizeses (${vizeses})</p>}`
        }
    // fovaros = kerdes.split("=")[1]
    // console.log(kerdes);
    // console.log(fovaros);

    let felhasznaloBevitelEredmeny = document.getElementById("felhasznaloi_input")
    felhasznaloBevitelEredmeny.innerHTML =   
      `  <h3>A felhasználó válasza</h3>
            <p>1. ${fovaros}</p>
            <p>1. ${vizeses}</p>`
}

