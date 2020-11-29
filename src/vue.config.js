const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
module.exports = {
    css: {
        loaderOptions:{
            sass:{
                sassOptions: {
                    data: `@import "@/assets/style/style.scss";`
                }
            }
        }
    },

};


