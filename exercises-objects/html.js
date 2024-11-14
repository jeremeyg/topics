const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" }
];

function generateMenu(el) {
    return el.map(e => `<a href='${e.url}'>${e.name}</a>`);
}
const menu = generateMenu(menuItems);
// "<a href='/'>Home</a> <a href='/about'>About</a> <a href='/contact'>Contact</a>"
console.log(menu);
