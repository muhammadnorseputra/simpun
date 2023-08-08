export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

// let's make a function that receive the specific element_id as string and scroll into that element_id
export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const tglIndo = (str: string) => {
  let d  = new Date(str)
  let tgl = d.toLocaleDateString("id")
  let pecah = tgl.split("/")
  var tglH: string  = pecah[0]; var tglB: string = pecah[1]; var tglT = pecah[2];
  switch(tglH) {
    case "0": tglH = "Minggu"; break;
    case "1": tglH = "Senin"; break;
    case "2": tglH = "Selasa"; break;
    case "3": tglH = "Rabu"; break;
    case "4": tglH = "Kamis"; break;
    case "5": tglH = "Jum'at"; break;
    case "6": tglH = "Sabtu"; break;
   }
   
   switch(tglB) {
    case "0": tglB = "Januari"; break;
    case "1": tglB = "Februari"; break;
    case "2": tglB = "Maret"; break;
    case "3": tglB = "April"; break;
    case "4": tglB = "Mei"; break;
    case "5": tglB = "Juni"; break;
    case "6": tglB = "Juli"; break;
    case "7": tglB = "Agustus"; break;
    case "8": tglB = "September"; break;
    case "9": tglB = "Oktober"; break;
    case "10": tglB = "November"; break;
    case "11": tglB = "Desember"; break;
   }

   let tampilTgl = `${tglB} ${pecah[0]}, ${tglT}`
   return tampilTgl; 
}