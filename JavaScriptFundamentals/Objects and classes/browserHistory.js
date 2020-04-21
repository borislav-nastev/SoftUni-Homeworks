function browserHistory(browserObject, activity) {

    for (let line of activity) {
        let [command, page] = line.split(" ");

        if (command === "Close") {

            if (browserObject["Open Tabs"].includes(page)) {
                let indexPage = browserObject["Open Tabs"].indexOf(page);

                browserObject["Open Tabs"].splice(indexPage, 1);
                browserObject["Recently Closed"].push(page);
                browserObject["Browser Logs"].push(line);
            }

        } else if (command === "Open") {
            browserObject["Open Tabs"].push(page);
            browserObject["Browser Logs"].push(line);

        } else {
            browserObject["Open Tabs"] = [];
            browserObject["Recently Closed"] = [];
            browserObject["Browser Logs"] = [];

        }
    }

    for (let line in browserObject) {

        if (line === "Browser Name") {
            console.log(`${browserObject[line]}`);

        } else {
            console.log(`${line}: ${browserObject[line].join((", "))}`);
        }
    }
}

browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
            "Recently Closed":["Yahoo","Gmail"],
            "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);