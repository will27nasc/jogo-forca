export default class EditTheme{
    static menuTheme(theme) {
        if(theme.getAttribute("dataset") === "off") {
            theme.classList.remove("no-active");
            theme.style.display = "block"
            theme.classList.add("active");
            theme.setAttribute("dataset", "on");
        } else {
            theme.classList.remove("active");
            theme.classList.add("no-active");
            theme.setAttribute("dataset", "off")
            setTimeout(() => {
                theme.style.display = "none";
            }, 2000);
        }
    }

    static changeTheme(color, root) {
        switch(color) {
            case "dark":
                root.style.setProperty('--cor-fundo', '#252422');
                root.style.setProperty('--cor-font', '#ffffff');
                root.style.setProperty('--cor-boneco', '#f1faee');
                root.style.setProperty('--cor-linha', '#d62828');
                break;
            case "light":
                root.style.setProperty('--cor-fundo', '#f6f7f8');
                root.style.setProperty('--cor-font', '#0f0f0f');
                root.style.setProperty('--cor-boneco', '#0f0f0f');
                root.style.setProperty('--cor-linha', '#d62828');
                break;
            case "tokio":
                root.style.setProperty('--cor-fundo', '#2f1847');
                root.style.setProperty('--cor-font', '#90e0ef');
                root.style.setProperty('--cor-boneco', '#ffff3f');
                root.style.setProperty('--cor-linha', '#04e762');
                break;
            case "ice":
                root.style.setProperty('--cor-fundo', '#b3c5d7');
                root.style.setProperty('--cor-font', '#00296b');
                root.style.setProperty('--cor-boneco', '#edf2fb');
                root.style.setProperty('--cor-linha', '#0582ca');
                break;
            default:  
                root.style.setProperty('--cor-fundo', '#252422');
                root.style.setProperty('--cor-font', '#ffffff');
                root.style.setProperty('--cor-boneco', '#f1faee');
                root.style.setProperty('--cor-linha', '#d62828');
        }
    }
}