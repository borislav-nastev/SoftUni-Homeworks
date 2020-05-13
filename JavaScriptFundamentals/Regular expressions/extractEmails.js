function extractEmails(data) {

    let input = data.slice();
    const regex = /((?<=\s)[a-zA-Z0-9]+([-.]\w*)*@[a-zA-Z]+?([.-][a-zA-Z]*)*(\.[a-z]{2,}))/gm;

    for (let line of input) {

        let currentMails = line.match(regex);

        if (currentMails) {
            currentMails.forEach(mail => console.log(mail));
        }
    }
}

extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.',
    'Please contact us at: support@github.com.',
    'end']);