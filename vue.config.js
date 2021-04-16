module.exports = {
    css: {
        loaderOptions: {
            // @import "@/assets/scss/styles.scss";
            // @import "@/assets/scss/fonts.scss";
            scss: {
                additionalData: `

                @import "@/assets/scss/variables.scss";

                `,
            }
        }
    }
}