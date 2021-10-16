export default function (trackClass) {
    trackClass.addEventListener("mouseenter", () => {
        document.body.style.cursor = "grab";
    });
    trackClass.addEventListener("mouseleave", () => {
        document.body.style.cursor = "default";
    });
    trackClass.addEventListener("mousedown", () => {
        document.body.style.cursor = "grabbing";
    });
    trackClass.addEventListener("mouseup", () => {
        document.body.style.cursor = "grab";
    });
}