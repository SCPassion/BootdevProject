const button = document.getElementById("enable-button");
button.addEventListener("click", () => {
    // @ts-ignore
    window.supportAI.enableAutoReply();
});
export {};
