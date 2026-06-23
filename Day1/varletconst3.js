const browserName = "Chrome";
function getBrowserName() {
    // Declare local variable with var first
    var localBrowserName;
    if (browserName === "Chrome") {
        localBrowserName = "Shadowed with var";
        console.log("Inside if block (var):", localBrowserName);
    }

    // Accessible outside because var is function-scoped
    console.log("Outside if block (var):", localBrowserName);
}

getBrowserName();