const browserName = "Chrome";
function getBrowserName() {
    // Declare local variable with var first
    let localBrowserName;
    if (browserName === "Chrome") {
        localBrowserName = "Shadowed with var";
        console.log("Inside if block (let):", localBrowserName);
    }

    // Accessible outside because var is function-scoped
    console.log("Outside if block (let):", localBrowserName);
}

getBrowserName();