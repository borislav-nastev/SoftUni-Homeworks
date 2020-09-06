function createHtmlEl(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
        Object.assign(result, attributes);
    }

    if (Array.isArray(content)) {
        content.forEach(append);
    } else {
        append(content);
    }

    function append(node) {
        if (typeof node === 'string' || typeof node === 'number') {
            node = document.createTextNode(node);
        }
        result.appendChild(node);
    }

    return result;
}

export default function createTableRow(student) {
    return createHtmlEl('tr', [
        createHtmlEl('td', student.id),
        createHtmlEl('td', student.firstName),
        createHtmlEl('td', student.lastName),
        createHtmlEl('td', student.facultyNumber),
        createHtmlEl('td', student.grade.toFixed(2)),
    ]);
}